const mongoose = require("mongoose");
const { type } = require("os");

const recipeModel = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  dsc: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const recipe_model = mongoose.model("recipe_model", recipeModel);

const login_Model = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const loginModel = mongoose.model("login_data", login_Model);

module.exports = { recipe_model, loginModel };
