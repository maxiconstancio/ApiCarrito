
const mongoose = require( "mongoose");
// View

const Schema = mongoose.Schema
const Cart = new Schema({
    codeProduct: { type: String, index: true},
    name: {type: String, required: true},
    img: {type: String, required: true},
    description: { type: String, required: true },
    price: Number,
    quantity: Number
   
  });

module.exports = mongoose.model('cart', Cart);