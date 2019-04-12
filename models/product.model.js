const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductSchema = new Schema({
  name: { type: String, required: true, maxlength: 1000 },
  price: { type: String, required: true },
  imageUrl: { type: String, required: true },
  productType: { type: String, required: true },
  description: { type: String, required: true },
  created_at: { type: Date, required: true, default: Date.now }
})

module.exports = mongoose.model('product', ProductSchema)