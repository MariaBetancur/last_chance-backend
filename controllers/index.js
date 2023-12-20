// controllers/index.js
const products = require('./products');
const auth = require('./auth');
const recommendedCaloriescontroller = require("./calorias");

module.exports = {
  products,
  auth,
  recommendedCaloriescontroller,
};
