const express = require("express");
const router = express.Router();

const { getBooks } = require("../../controllers/booksController");

// @route GET /
// @desc Get books
// @access Public
router.get("/", [], getBooks);

module.exports = router;
