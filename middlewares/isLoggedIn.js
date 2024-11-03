const jwt = require("jsonwebtoken")
const userModel = require("../models/user.model")

const isLoggedIn = async function (req, res, next) {
  if (!req.cookies.token) {
    res.redirect("/")
  } else {
    const token = req.cookies.token
    const data = jwt.verify(token, process.env.JWT_KEY)

    req.user = await userModel
      .findOne({ email: data.email })
      .select("-password")

    next()
  }
}

module.exports = isLoggedIn
