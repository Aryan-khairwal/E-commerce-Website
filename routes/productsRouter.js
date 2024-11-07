const express = require("express")
const router = express.Router()
const upload = require("../config/multer-config")
const isAdmin = require("../middlewares/isAdmin")
const {
  createProduct,
  editProduct,
  editProductPage,
  deleteAll,
  deleteProduct,
} = require("../controllers/productController")

router.get("/", isAdmin, (req, res) => {
  res.render("admin")
})
router.post("/create", isAdmin, upload.single("image"), createProduct)
router.get("/delete/:id", isAdmin, deleteProduct)
router.get("/deleteAll", isAdmin, deleteAll)

router.get("/edit/:id", isAdmin, editProductPage)
router.post("/edit/:id", isAdmin, editProduct)
module.exports = router
