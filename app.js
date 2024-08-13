// var log = require('./logger');

// console.log("message");

// const path = require('path');
// var pathobject = path.parse(__filename);

// console.log(pathobject)


// const os = require('os');
// let totalmemory = os.totalmem();
// let freememory = os.freemem();

// console.log('total memory:' + totalmemory);
// console.log('free memory:' + freememory);

// const os = require('node:os');
// let userinof = os.userInfo();
// console.log('user info ' + userinof);
// const fs = require('fs')
// const files = fs.readdirSync('./');
// console.log(files);

// const express = require('express');
// const app = express();

// const port = 3000;

// app.get('/', (req, res) => {
//   res.send('Hello, World!');
// });

// app.use('/api', routes);
// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });



function f (n = 99) {
  if (n === 0) throw Error()
  f(n - 1)
  }
  f()