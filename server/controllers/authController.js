const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");

const User = require("../models/User");

const jwtSign = require("../utils/jwtSign");

exports.authenticateUser = async (req, res) => {
  try {
    const user = await User.findOne({
      attributes: ["id", "name", "email", "password", "avatar", "about"],
      where: { id: req.user.id },
    });

    return res.json(user);
  } catch (err) {
    console.log("authenticateUser error:", err.message);
    res.status(500).json({ message: err });
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
    const token = jwtSign(user);
    res.json({ token });
  } catch (err) {
    console.log("registerUser error:", err.message);
    res.status(500).json({ message: err });
  }
};
