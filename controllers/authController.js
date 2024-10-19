const bcrypt = require("bcrypt");
const userModel = require("../models/user.model");
const generateToken = require("../utils/generateToken");

async function registerUser(req, res) {
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

async function loginUser(req, res) {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });

    if (!user) {
      // res.redirect('/login')
      res.send("Login Fail");
    }

    bcrypt.compare(password, user.password, (err, result) => {
      if (result) {
        const token = generateToken({ email, id: user._id });
        res.cookie("token", token);
        // res.redirect('')
        res.send("Login Success");
      } else {
        res.send("Login Fail");
      }
    });
  } catch (error) {
    res.status(500);
    console.error(error.message);
  }
}

function logoutUser(req, res) {
  res.cookie("token", "");
  res.send("Logged Out");
}
module.exports.registerUser = registerUser;
module.exports.loginUser = loginUser;
module.exports.logoutUser = logoutUser;
