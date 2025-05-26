const express = require('express');
const app = express();

const userSchema = require('./userschema');

app.get('/', (req, res) => {
  res.send('Hey');
});

//Create User
app.get('/create', async(req, res) => {
  const user = await userSchema.create({
    name : "Probar Shamim", 
    userName : "probar",
    email : "shamim@gmail.com",
  });

  res.send(user);
});

//Update User
app.get('/update', async(req, res) => {
  const updateUser = await userSchema.findOneAndUpdate({userName: "shamim"}, {name: "Probar Shamim"}, {new: true});

  res.send(updateUser);
});

//read User
app.get('/read', async(req, res) => {
  const users = await userSchema.find();

  res.send(users);
});

//Delete User
app.get('/delete', async(req, res) => { 
  const deleteUser = await userSchema.findOneAndDelete({userName: "shamim"});

  res.send(deleteUser);
});


app.listen(3000);