const mongoose = require("mongoose")

async function connectDB() {
  await mongoose
    .connect(`${process.env.MONGODB_URI}/old-money-store`)

    .then(() => {
      console.log("Db connected!")
    })
    .catch((err) => {
      console.log("cannot connect to DB " + err)
    })
}

module.exports = connectDB
