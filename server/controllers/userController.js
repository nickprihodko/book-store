const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");

const User = require("../models/User");
const Profile = require("../models/Profile");

const jwtSign = require("../utils/jwtSign");
// const { makePassword } = require("../utils/makePassword");

exports.registerUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, email, password } = req.body;

  try {
    // See if user exists
    let user = await User.findOne({
      email,
      where: {
        email,
      },
      attributes: ["id"],
    });

    if (user) {
      return res.status(400).json({ errors: [{ msg: "User already exists" }] });
    }

    user = new User({
      name,
      email,
      password,
    });

    // Encrypt password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    // user.password = await makePassword(password);

    // save new user
    await user.save();

    // save new profile
    profile = new Profile({ userId: user.id });
    await profile.save();

    // Return JWT
    jwtSign(user, res);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server error");
  }
};
