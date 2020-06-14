const express = require("express");
const router = express.Router();

const { check } = require("express-validator");

const auth = require("../../middleware/auth");

const {
  authenticateUser,
  registerUser,
} = require("../../controllers/authController");

// @route GET api/auth
// @desc Authenticate user & get token
// @access Public
router.get("/", auth, authenticateUser);

// @route POST api/auth
// @desc Register user
// @access Public
router.post(
  "/",
  [
    check("email", "Please include a valid email").isEmail(),
    check("password", "Password is required").exists(),
  ],
  registerUser
);

module.exports = router;
