const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/products.models.js');


const app = express();



app.use(express.json());

app.get('/',(req,res) => {
    res.send("Hello from node API updated ");
})


// routes 
app.use('/api/products', productRoute);


// get all producst API 
app.get('/api/products', async(req,res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);

    }
    catch (error) {
   res.status(500).json({message:error.message});
    }
})

// api single producs 

app.get('/api/products/:id', async (req,res) => {
    try {
        const {id} = req.params;
        const products = await Product.findById(id);
        res.status(200).json(products);

    }
    catch (error) {
   res.status(500).json({message:error.message});
    }
})


// update products 

app.put('/api/products/:id', async (req,res) => {
    try {
        const {id} = req.params;
        const product = await Product.findByIdUpdate(id, req.body);
      
        if(!product){
            return res.status(404).json({message: "product not found"});
        }

    const updateProduct = await  product.findById(id);
    res.status(200).json(updateProduct)
    }
    catch (error) {
   res.status(500).json({message:  error.message});
    }
})


// delete product 


app.delete('/api/products/:id', async (req,res) => {
    try {
        const {id} = req.params;
        const products = await Product.findByIdAndDelete(id);
        if(!products){
            return res.status(404).json({message: "product not found"});
        }
        res.status(200).json({message: "products has been deleted succesfuly "})
    }
    catch (error) {
   res.status(500).json({message:error.message});
    }
})

// POST API

app.post('/api/products', async(req,res) => {
    try {
const product = await Product.create(req.body);
res.status(200).json(product);
    }catch (error) {
res.status(500).json({message:error.message});
    }
});

mongoose.connect("mongodb+srv://mahuraninstitute:hWkexzUY4H9FGawG@backenddb.0e092.mongodb.net/Node-API?retryWrites=true&w=majority&appName=backendDB")
.then(() => {
   console.log("connectd to database ");
   
app.listen(3000, ()   =>{
    console.log("server running port 3000 ");
 })
})
.catch(() => {
    console.log("connection failed ");
})