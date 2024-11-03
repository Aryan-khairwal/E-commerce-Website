const express = require("express")
const router = express.Router()
const {
  registerSeller,
  loginSeller,
  adminPage,
} = require("../controllers/sellerController")

router.post("/register", registerSeller)
router.post("/login", loginSeller)

router.get("/", adminPage)

router.get("/createProducts", (req, res) => {
  res.render("createProducts")
})

module.exports = router
