const express = require("express");
const router = express.Router();

const { getBook } = require("../../controllers/bookController");

// @route GET /
// @desc Get one book
// @access Public
router.get("/:id", [], getBook);

module.exports = router;
