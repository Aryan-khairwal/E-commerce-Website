const express = require("express")
const router = express.Router()
const productModel = require("../models/product.model")
const {
  registerSeller,
  loginSeller,
  adminPage,
} = require("../controllers/sellerController")

const isAdmin = require("../middlewares/isAdmin")

router.get("/", isAdmin, async (req, res) => {
  const products = await productModel.find()
  res.render("admin", { products })
})

router.get("/login", (req, res) => {
  res.render("sellerLogin")
})
router.post("/login", loginSeller)

router.post("/register", registerSeller)

router.get("/createProducts", isAdmin, (req, res) => {
  res.render("createProducts")
})

module.exports = router
