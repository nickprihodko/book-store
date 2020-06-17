const express = require("express");
const router = express.Router();

const { getCategories } = require("../../controllers/categoriesController");

// @route GET /
// @desc Get categories
// @access Public
router.get("/", [], getCategories);

module.exports = router;
