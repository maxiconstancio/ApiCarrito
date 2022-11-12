const express = require("express");
const app = express();

const { findCart, update, newItemCart, deleteOne, clearCart } = require("../controllers/cartController");
const validate = require("../middleware/validate");
const cartValidation = require("../validations/cart");


/* View Cart */
app.get("/cart", findCart);

/* PATCH Cart */
app.put("/cart/:codeProduct", update );
 

/* POST Cart */
  app.post("/cart", validate(cartValidation), newItemCart );
  
/* DELETE One Item */
app.delete("/cart/:codeProduct", deleteOne);


/* CLEAR CART */
 app.delete("/cart", clearCart);

module.exports = app;