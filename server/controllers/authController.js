const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");

const User = require("../models/User");

const jwtSign = require("../utils/jwtSign");

exports.authenticateUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.user.id);

    res.json(user);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server Error");
  }
};

exports.registerUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;

  try {
    // See if user exists
    let user = await User.findOne({
      email,
      where: {
        email,
      },
    });

    if (!user) {
      return res.status(400).json({ errors: [{ msg: "Invalid credentials" }] });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ errors: [{ msg: "Invalid credentials" }] });
    }

    // Return JWT
    jwtSign(user, res);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server error");
  }
};
