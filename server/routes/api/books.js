const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");
const path = require("path");
const multer = require("multer");

const auth = require("../../middleware/auth");
const setUser = require("../../middleware/setUser");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/images/uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, `${uuidv4()}${path.extname(file.originalname)}`);
  },
});

const fileFilter = (req, file, cb) => {
  if (!file.originalname.match(/\.(jpg|jpeg|JPEG|JPG|png|PNG|gif|GIF)$/)) {
    return cb(new Error("Only image files are allowed!"));
  } else {
    cb(null, true);
  }
};

const upload = multer({
  storage,
  fileFilter,
});

const {
  getBooks,
  getBook,
  addBook,
  setRating,
  setFavorite,
  setBookCover,
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

// @route PATCH /
// @desc Set book cover
// @access Private
router.patch("/cover", upload.single("cover"), setBookCover);

module.exports = router;
