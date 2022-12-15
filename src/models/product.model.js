
const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
  productName: {
    type: String,
    trim: true,
  },
  category: {
    type: String,
    trim: true,
  },
  amount: {
    type: Number,
  },
},
{ timestamps: true },
);
module.exports = mongoose.model('Product', ProductSchema);