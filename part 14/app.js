const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

app.use(cookieParser());

// app.get('/', (req, res) => {
//   bcrypt.genSalt(10, function(err, salt) {
//     bcrypt.hash("shamim", salt, function(err, hash) {
//         res.send(hash); 
//     });
//   });
// });

app.get('/', (req, res) => {
  let token = jwt.sign({email: "shamim@gmail.com"}, 'secret');
  res.cookie("token", token);
  res.send('Done');
});

app.get('/read', (req, res) => {
  res.send(req.cookies.token);
  let data = jwt.verify(req.cookies.token, 'secret');
  console.log(data);
});

app.listen(3000);