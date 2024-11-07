const isLoggedIn = require("../middlewares/isLoggedIn")
const express = require("express")
const productModel = require("../models/product.model")
const userModel = require("../models/user.model")
const router = express.Router()
const { addToCart } = require("../controllers/cartController")

router.get("/", (req, res) => {
  res.render("index", { error: {}, showNav: false })
})

router.get("/shop", isLoggedIn, async (req, res) => {
  const products = await productModel.find()
  res.render("shop", { products })
})

router.get("/addToCart/:id", isLoggedIn, addToCart)

router.get("/cart", isLoggedIn, async (req, res) => {
  const user = await userModel
    .findOne({ email: req.user.email })
    .populate("cart")
  res.render("cart", { user })
})

router.get("/cart/placeOrder", (req, res) => {
  res.send("Order Placed, Thank You!")
})
module.exports = router
