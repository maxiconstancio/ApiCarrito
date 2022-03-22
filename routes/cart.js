
const mongoose = require( "mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const Cart = require( "../database/models/Cart");
const app = express();
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// View


app.get("/cart", function (req, res) {
    Cart.find({}, function (err, data) {
      if (err) return console.log(err);
      res.json(data);
    });
  });


app.put("/cart/:codeProduct", function (req, res) {
    Cart.updateOne({codeProduct: req.params.codeProduct},{ quantity: req.body.quantity}, function (err, data) {
      if (err) return console.log(err);
      res.json(data);
    });
  });
 
  app.post("/cart", function (req, res) {
    let cartId = req.body.codeProduct
    let  cartName = req.body.name
    let  cartImg = req.body.img
    let cartDescription = req.body.description
    let cartPrice = req.body.price;
    let cartQuantity = req.body.quantity;
    

     Cart.create({codeProduct: cartId, name: cartName, img: cartImg, description: cartDescription, price: cartPrice, quantity: cartQuantity} )
    
    //newProduct.save()
    .then(msg => res.status(200).send())
    .catch(err => console.log(err))
    
    //res.json({ userName: string, "_id":  });
  });

  app.delete("/cart/:codeProduct", function (req, res) {
    Cart.deleteOne({codeProduct: req.params.codeProduct}, function (err, data) {
        if (err) return console.log(err);
        res.json(data);
      });
  })

  app.delete("/cart", function (req, res) {
    Cart.deleteMany({}, function (err, data) {
        if (err) return console.log(err);
        res.json(data);
      });
  })

module.exports = app;