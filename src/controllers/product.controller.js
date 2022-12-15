
const Product = require('../models/product.model');
const check = require('../validations/product.validation');
const  ObjectId = require('mongoose').Types.ObjectId;

module.exports = {
  //create product function
  createProduct: async (req, res) => {
    //check if validation conditions are met
    const noError = check(req.body);
    if (noError != true) {
      return res.status(400).json({ status: 400, error: noError});
    };
    //check if product already exists
    const productExist = await Product.findOne({ productName: req.body.productName});
    if (productExist) {
      return res.json({msg: "Product already exist"})
    };
   //create the product
    const product = await Product.create(req.body);
    res.status(201).json({ msg: 'successfully added a product', product });
  },

  //get all products function
  getAllProducts: async (req, res) => {
    const products = await Product.find({});
    res.status(200).json({ products, number: products.length });
  },

  //get product by Id function
  getProductById: async (req, res) => {
      const productId = req.params.id;
      const product = await Product.findById(productId);
      //check if product Id is valid
      if (!product || ObjectId.isValid(productId) == false) {
      return res.status(404).json({
             message: `No product with id: ${productId}` 
     });
  }
    res.status(200).json({ message: product });
  },

  //update product by Id function
  updateProductById: async (req, res) => {
    const productId = req.params.id;
    const product = await Product.findByIdAndUpdate(productId, req.body);
    //check if Id is valid
    if (!productId || ObjectId.isValid(productId) == false) {
    return res.status(404).json({ 
           message: `No product with id: ${productId}` 
   });
} 
    //check if validation conditions are met
    const noError = check(req.body);
    if (noError != true) {
      return res.status(400).json({ status: 400, error: noError});
    };
    res.status(200).json({ message: `Product successfuly updated` });
  },

  //Delete product by Id
  deleteProductById: async (req, res) => {
    const productId = req.params.id;
    const product = await Product.findByIdAndDelete(productId);
    //check if Id is a valid
    if (!product || ObjectId.isValid(productId) == false) {
   return res.status(404).json({
          message: `No product with id: ${productId}` });
  }
    res.status(200).json({message: `Product successfuly deleted`});
  },
};