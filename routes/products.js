const express = require("express");
const { createProduct } = require("../controllers/productsController");
const Product = require( "../database/models/Products");
const validate = require("../middleware/validate");
const validateProduct = require("../validations/product");
const app = express();


// View


app.get("/products", function (req, res) {
    Product.find({}, function (err, data) {
      if (err) return console.log(err);
      res.json(data);
    });
  });

  /* New Product  */
 
  app.post("/products", validate(validateProduct), createProduct);

module.exports = app;