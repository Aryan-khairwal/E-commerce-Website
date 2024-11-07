const jwt = require("jsonwebtoken")
const sellerModel = require("../models/seller.model")

const isAdmin = async function (req, res, next) {
  if (!req.cookies.adminToken) {
    res.redirect("/seller/login")
  } else {
    next()
  }
}

module.exports = isAdmin
