const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductTypeSchema = new Schema({
  name: { type: String, required: true, maxlength: 1000 },
  created_at: { type: Date, required: true, default: Date.now }
})

module.exports = mongoose.model('productType', ProductTypeSchema)