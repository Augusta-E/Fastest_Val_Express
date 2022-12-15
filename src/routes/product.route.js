const route = require('express').Router();
const {
  getAllProducts,
  createProduct,
  getProductById,
  updateProductById,
  deleteProductById,
} = require('../controllers/product.controller');

route.post('/product', createProduct);
route.get('/products', getAllProducts);
route.get('/product/:id', getProductById);
route.patch('/product/:id', updateProductById);
route.delete('/product/:id', deleteProductById);

module.exports = route;