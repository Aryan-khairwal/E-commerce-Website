const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://aryankhairwal479:sFFZgUpSJFrHjyrt@backend.ovr51cg.mongodb.net/old-money-store"
  )

  .then(() => {
    console.log("Db connected!");
  })
  .catch((err) => {
    console.log("cannot connect to DB " + err);
  });

module.exports = mongoose.connection;
