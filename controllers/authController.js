const bcrypt = require("bcrypt");
const userModel = require("../models/user.model");
const generateToken = require("../utils/generateToken");

function registerUser(req, res) {
  try {
    const { name, email, phone, password } = req.body;

    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(password, salt, async function (err, hash) {
        const user = await userModel.create({
          name,
          phone,
          email,
          password: hash,
        });

        if (user) {
          const token = generateToken({ email: user.email, id: user._id });
          res.cookie("token", token);
        }
        res.status(201).send(user);
      });
    });
  } catch (error) {
    res.status(500);
    console.error(error.message);
  }
}

module.exports.registerUser = registerUser;
module.exports.loginUser = loginUser;
