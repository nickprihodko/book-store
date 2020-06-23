const express = require("express");
const router = express.Router();

const auth = require("../../middleware/auth");
const setUser = require("../../middleware/setUser");

const {
  getBooks,
  getBook,
  addBook,
  setRating,
  setFavorite,
} = require("../../controllers/booksController");

// @route GET /
// @desc Get all books
// @access Public
router.get("/", [], getBooks);

// @route GET /
// @desc Get one book
// @access Public/Private
router.get("/:id", setUser, getBook);

// @route POST /
// @desc Add new book
// @access Private
router.post("/", [], addBook);

// @route PATCH /
// @desc Create update rating
// @access Private
router.patch("/rating", auth, setRating);

// @route PATCH /
// @desc Set favorite
// @access Private
router.patch("/favorite", auth, setFavorite);

module.exports = router;
