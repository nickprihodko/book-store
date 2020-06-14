const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");

const {
  getProfile,
  createProfile,
} = require("../../controllers/profileController");

// @route GET api/profile
// @desc Get current users profile
// @access Private
router.get("/", auth, getProfile);

// @route POST api/profile
// @desc Create or update user profile
// @access Private
router.post("/", auth, createProfile);

module.exports = router;
