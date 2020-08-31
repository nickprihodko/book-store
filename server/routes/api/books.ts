import express, { Router } from 'express';

const router = Router();

// const auth = require("../../middleware/auth");
// const setUser = require("../../middleware/setUser");
import setUser from '../../middleware/setUser';
// const upload = require("../../utils/uploadPictures");

// const {
//   getBooks,
//   getBook,
//   addBook,
//   setRating,
//   setFavorite,
//   setBookCover,
// } = require("../../controllers/booksController");

import { getBooks, getBook } from '../../controllers/booksController';

// @route GET /
// @desc Get all books
// @access Public
router.get("/", getBooks);

// @route GET /
// @desc Get one book
// @access Public/Private
router.get("/:id", setUser, getBook);

// @route POST /
// @desc Add new book
// @access Private
// router.post("/", auth, addBook);

// @route PATCH /
// @desc Create update rating
// @access Private
// router.patch("/rating", auth, setRating);

// @route PATCH /
// @desc Set favorite
// @access Private
// router.patch("/favorite", auth, setFavorite);

// @route PATCH /
// @desc Set book cover
// @access Private
// router.patch("/cover", upload.single("cover"), setBookCover);

export default router;
