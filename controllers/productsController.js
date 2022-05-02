const Products = require('../database/models/Products');

module.exports = {

    createProduct: async (req, res) => {
        try {
            const newProduct = await Product.create(req.body);
            return res.status(200).json(newProduct);
        } catch (error) {
            return res.status(500).json(error);
        }

    },

    getProducts: async (req, res) => {
        try {
            const listProducts = await Products.find({});
            return res.status(200).json(listProducts);
        } catch (error) {
            return res.status(500).json(error);
        }
    }


}