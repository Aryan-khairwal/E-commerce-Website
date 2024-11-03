const sellerModel = require("../models/seller.model")
const productModel = require("../models/product.model")
const bcrypt = require("bcrypt")

const registerSeller = async function (req, res) {
  const { name, email, password, phone, gstin } = req.body
  try {
    const sellers = await sellerModel.find()
    if (sellers.length > 0) {
      res.send("Cannot Register New Seller")
    }

    bcrypt.hash(password, 10, async (err, hash) => {
      await sellerModel.create({ name, email, password: hash, phone, gstin })
      res.send("User Registerd")
    })
  } catch (error) {
    res.status(500)
    console.error(error.message)
  }
}

const loginSeller = async function (req, res) {
  const { email, password } = req.body

  const seller = await sellerModel.findOne({ email })

  if (!seller) res.send("Something is wrong")

  bcrypt.compare(password, seller.password, (err, result) => {
    if (result) res.redirect("/seller/dashboard")
    else res.send("Login Failed")
  })
}

const adminPage = async function (req, res) {
  const products = await productModel.find()
  res.render("admin", { products })
}
module.exports.registerSeller = registerSeller
module.exports.loginSeller = loginSeller
module.exports.adminPage = adminPage
