import { Router } from 'express';
const router = Router();

import { getCategories } from '../../controllers/categoriesController';

// @route GET /
// @desc Get categories
// @access Public
router.get("/", getCategories);

export default router;
