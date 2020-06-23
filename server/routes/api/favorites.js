const express = require("express");
const router = express.Router();

const auth = require("../../middleware/auth");

const { getFavorites } = require("../../controllers/favoritesController");

// @route GET /
// @desc Get favorites
// @access Private
router.get("/", auth, getFavorites);

module.exports = router;
