const productModel = require("../models/product.model")
const createProduct = async function (req, res) {
  try {
    const { name, price, discount, bgcolor, panelcolor, textcolor } = req.body
    const image = req.file.buffer

    await productModel.create({
      name,
      price,
      discount,
      bgcolor,
      panelcolor,
      textcolor,
      image,
    })

    res.redirect("/seller/createProducts")
  } catch (error) {
    res.status(500)
    console.error(error.message)
  }
}

const deleteAll = async function (req, res) {
  try {
    await productModel.collection.drop().then(console.log("Deleted All"))
    res.redirect("/seller")
  } catch (error) {
    res.status(500)
    console.error(error.message)
  }
}

module.exports.createProduct = createProduct
module.exports.deleteAll = deleteAll
