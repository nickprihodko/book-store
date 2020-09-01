import { Router } from 'express';
const router = Router();

import auth from '../../middleware/auth';
import { getFavorites } from '../../controllers/favoritesController';

// @route GET /
// @desc Get favorites
// @access Private
router.get('/', auth, getFavorites);

export default router;
