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

const editProductPage = async function (req, res) {
  try {
    const product = await productModel.findOne({ _id: req.params.id })
    res.render("editProduct", { product })
  } catch (error) {
    res.status(500)
    console.error(error.message)
  }
}
const editProduct = async function (req, res) {
  try {
    const { name, price, discount, bgcolor, panelcolor, textcolor } = req.body
    const product = await productModel.findOneAndUpdate(
      { _id: req.params.id },
      { name, price, discount, bgcolor, panelcolor, textcolor }
    )
    res.redirect("/seller")
  } catch (error) {
    res.status(500)
    console.error(error.message)
    res.redirect("/seller")
  }
}

const deleteProduct = async function (req, res) {
  try {
    const product = await productModel.findOneAndDelete({ _id: req.params.id })
    res.redirect("/seller")
  } catch (error) {
    res.status(500)
    console.error(error.message)
    res.redirect("/seller")
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
module.exports.editProduct = editProduct
module.exports.editProductPage = editProductPage
module.exports.deleteAll = deleteAll
module.exports.deleteProduct = deleteProduct
