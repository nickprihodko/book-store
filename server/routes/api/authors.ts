import { Router } from 'express';
const router = Router();

import { getAuthors } from '../../controllers/authorsController';

// @route GET /
// @desc Get authors
// @access Public
router.get("/", getAuthors);

export default router;
