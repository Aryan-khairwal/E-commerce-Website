const express = require("express");
const app = express();

const cookieParser = require("cookie-parser");
const path = require("path");
const db = require("./config/mongoose-connection");
const dotenv = require("dotenv");

const productsRouter = require("./routes/productsRouter");
const usersRouter = require("./routes/usersRouter");
const sellersRouter = require("./routes/sellersRouter");

dotenv.config();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());

app.set("view engine", "ejs");

app.use("/users", usersRouter);
app.use("/products", productsRouter);
app.use("/seller", sellersRouter);

app.listen(process.env.PORT);
