const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
  name: {
    type: String,
    default: "User",
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    minLength: 10,
  },

  cart: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "product",
    },
  ],
  orders: {
    type: Array,
    default: [],
  },
  picture: String,
})

module.exports = mongoose.model("user", userSchema)
