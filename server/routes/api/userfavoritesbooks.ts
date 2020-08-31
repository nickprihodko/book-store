import { Router } from 'express';
const router = Router();

import auth from '../../middleware/auth';

import {
  getUserFavoritesBooks,
} from '../../controllers/favoritesBooksController';

// @route GET /
// @desc Get favorites
// @access Private
router.get("/", auth, getUserFavoritesBooks);

export default router;
