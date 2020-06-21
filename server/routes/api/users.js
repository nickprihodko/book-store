const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const { v4: uuidv4 } = require("uuid");
const path = require("path");
const multer = require("multer");

const auth = require("../../middleware/auth");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/images/uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, `${uuidv4()}${path.extname(file.originalname)}`);
  },
});

const fileFilter = (req, file, cb) => {
  if (!file.originalname.match(/\.(jpg|jpeg|JPEG|JPG|png|PNG|gif|GIF)$/)) {
    return cb(new Error("Only image files are allowed!"));
  } else {
    cb(null, true);
  }
};

const upload = multer({
  storage,
  fileFilter,
});

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
