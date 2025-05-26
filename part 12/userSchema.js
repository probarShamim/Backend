const { name } = require("ejs");
const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/ejs');

const userSchema = mongoose.Schema({
  name: String,
  email: String,
  image: String,
});

module.exports = mongoose.model('ejs', userSchema);