const express = require("express")
const router = express.Router()
const upload = require("../config/multer-config")

const { createProduct, deleteAll } = require("../controllers/productController")

router.get("/", (req, res) => {
  res.send("products page")
})
router.post("/create", upload.single("image"), createProduct)
router.get("/deleteAll", deleteAll)
module.exports = router
