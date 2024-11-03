const userModel = require("../models/user.model")

const addToCart = async function (req, res) {
  try {
    const user = await userModel.findOne({ email: req.user.email })
    await user.cart.push(req.params.id)
    await user.save()

    res.redirect("/shop")
  } catch (error) {
    res.status(500)
    console.error(error.message)
    res.redirect("/shop")
  }
}

module.exports.addToCart = addToCart
