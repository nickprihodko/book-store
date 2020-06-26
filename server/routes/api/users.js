const express = require("express");
const router = express.Router();
const { check } = require("express-validator");

const auth = require("../../middleware/auth");
const upload = require("../../utils/uploadPictures");

const {
  registerUser,
  getUser,
  updateUser,
} = require("../../controllers/userController");

// @route POST api/users
// @desc Register user
// @access Public
router.post(
  "/",
  [
    check("name", "Name is required").not().isEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check(
      "password",
      "Please enter a password with 6 or more characters"
    ).isLength({ min: 6 }),
  ],
  registerUser
);

// @route GET api/users
// @desc Get current user
// @access Private
router.get("/", auth, getUser);

// @route PATCH api/users
// @desc Update user
// @access Public
router.patch("/", auth, upload.single("avatar"), updateUser);

module.exports = router;
