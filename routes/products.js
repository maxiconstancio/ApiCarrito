
const mongoose = require( "mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const Product = require( "../database/models/Products");
const app = express();
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// View


app.get("/products", function (req, res) {
    Product.find({}, function (err, data) {
      if (err) return console.log(err);
      res.json(data);
    });
  });

 
  app.post("/products", function (req, res) {
    let codeProduct = req.body.codeProduct
    let  productName = req.body.name
    let  productImg = req.body.img
    let productDescription = req.body.description
    let productPrice = req.body.price;
    

     Product.create({codeProduct, name: productName, img: productImg, description: productDescription, price: productPrice} )
    
    //newProduct.save()
    .then(msg => res.status(200).send())
    .catch(err => console.log(err))
    
    //res.json({ userName: string, "_id":  });
  });

module.exports = app;