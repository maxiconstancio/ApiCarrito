const Cart = require("../database/models/Cart");

module.exports = {
  findCart: async (req, res) => {
    try {
      const findCart = await Cart.find({});
      return res.status(200).json(findCart);
    } catch (error) {
      return res.status(500).json(error);
    }
  },

  update: async (req, res) => {
    try {
      const updCart = await Cart.updateOne(
        { codeProduct: req.params.codeProduct },
        { quantity: req.body.quantity }
      );
      return res.status(200).json(updCart);
    } catch (error) {
      return res.status(500).json(error);
    }
  },

  newItemCart: async (req, res) => {
    try {
      const newCart = await Cart.create(req.body);
      return res.status(200).json(newCart);
    } catch (error) {
      return res.status(500).json(error);
    }
  },

  deleteOne: async (req, res) => {
    try {
      const deleteItem = await Cart.deleteOne({
        codeProduct: req.params.codeProduct,
      });
      return res.status(410).json("Ok");
    } catch (error) {
      return res.status(500).json(error);
    }
  },

  clearCart: async (req, res) => {
    try {
      const clsCart = await Cart.deleteMany({});
      return res.status(410).json(clsCart);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};
