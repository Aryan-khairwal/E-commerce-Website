const mongoose = require("mongoose")

const sellerSchema = mongoose.Schema({
  name: {
    type: String,
  },

  email: {
    type: String,
    unique: true,
  },
  password: String,
  phone: {
    type: Number,
    minLength: 10,
  },

  products: {
    type: Array,
    default: [],
  },
  gstin: String,
  picture: String,
})

module.exports = mongoose.model("seller", sellerSchema)
