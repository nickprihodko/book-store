const express = require("express");
const router = express.Router();

const { getAuthors } = require("../../controllers/authorsController");

// @route GET /
// @desc Get authors
// @access Public
router.get("/", getAuthors);

module.exports = router;
