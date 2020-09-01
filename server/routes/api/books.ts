import { Router } from 'express';
const router = Router();

import auth from '../../middleware/auth';
import setUser from '../../middleware/setUser';
import upload from '../../utils/uploadPictures';

import { getBooks,
  getBook,
  addBook,
  setRating,
  setFavorite,
  setBookCover
} from '../../controllers/booksController';

// @route GET /
// @desc Get all books
// @access Public
router.get('/', getBooks);

// @route GET /
// @desc Get one book
// @access Public/Private
router.get('/:id', setUser, getBook);

// @route POST /
// @desc Add new book
// @access Private
router.post('/', auth, addBook);

// @route PATCH /
// @desc Create update rating
// @access Private
router.patch('/rating', auth, setRating);

// @route PATCH /
// @desc Set favorite
// @access Private
router.patch('/favorite', auth, setFavorite);

// @route PATCH /
// @desc Set book cover
// @access Private
router.patch('/cover', upload.single('cover'), setBookCover);

export default router;
