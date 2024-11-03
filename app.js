const express = require("express")
const app = express()

const dotenv = require("dotenv").config()
const cookieParser = require("cookie-parser")
const path = require("path")
const connectDB = require("./config/mongoose-connection")

const indexRouter = require("./routes/indexRouter")
const usersRouter = require("./routes/usersRouter")
const productsRouter = require("./routes/productsRouter")
const sellersRouter = require("./routes/sellersRouter")

connectDB()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static(path.join(__dirname, "public")))
app.use(cookieParser())

app.set("view engine", "ejs")

app.use("/", indexRouter)
app.use("/users", usersRouter)
app.use("/products", productsRouter)
app.use("/seller", sellersRouter)

app.listen(process.env.PORT)
