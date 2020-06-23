const express = require("express");
const router = express.Router();

const auth = require("../../middleware/auth");

const {
  getUserFavoritesBooks,
} = require("../../controllers/favoritesBooksController");

// @route GET /
// @desc Get favorites
// @access Private
router.get("/", auth, getUserFavoritesBooks);

module.exports = router;
