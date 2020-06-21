const express = require("express");
const router = express.Router();

const {
  getBooks,
  getBook,
  addBook,
} = require("../../controllers/booksController");

// @route GET /
// @desc Get all books
// @access Public
router.get("/", [], getBooks);

// @route GET /
// @desc Get one book
// @access Public
router.get("/:id", [], getBook);

// @route POST /
// @desc Add new book
// @access Private
router.post("/", [], addBook);

module.exports = router;
