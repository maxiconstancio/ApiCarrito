
const mongoose = require( "mongoose");
// View

const Schema = mongoose.Schema
const Product = new Schema({
    codeProduct: {type: String, index: true},
    name: {type: String, required: true},
    img: {type: String, required: true},
    description: { type: String, required: true },
    price: Number
   
  });

module.exports = mongoose.model('products', Product);