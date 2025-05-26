const express = require('express');
const app = express();
const path = require('path');
const userSchema = require('./userSchema');

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req,res) => {
  res.render('index');
});

// Create User
app.post('/create', async(req,res) => {
  let user = req.body;
  user = await userSchema.create(user);
  res.redirect('/');
});

// Read User
app.get('/read', async(req,res) => {
  let allUsers = await userSchema.find();
  res.render('read', {allUsers});
});

// Update User
app.get('/edit/:id', async(req,res) => {
  let user = await userSchema.findById(req.params.id);
  res.render('edit', {user});
});

app.post('/edit/:id', async(req,res) => {
  let d_id = req.params.id;
  let new_data = req.body;
  await userSchema.findOneAndUpdate({_id: d_id}, {name: new_data.name, email: new_data.email, image: new_data.image}, {new: true});
  res.redirect('/read');
});


// Delete User
app.get('/delete/:id', async(req,res) => {
  let d_id = req.params.id;
  let allUsers = await userSchema.findOneAndDelete({_id: d_id});

  allUsers = await userSchema.find();
  res.render('read', {allUsers});
});


app.listen(3000); 