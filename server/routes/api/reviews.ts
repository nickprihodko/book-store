import { Router } from 'express';
const router = Router();

import auth from '../../middleware/auth';

import { getReviews, 
  addReview,
  deleteReview
} from '../../controllers/reviewController';

// @route GET /
// @desc Get reviews
// @access Public
router.get("/:id", getReviews);

// @route POST /
// @desc Add review
// @access Private
router.post("/", auth, addReview);

// @route DELETE /
// @desc Delete review
// @access Private
router.delete("/:id", auth, deleteReview);

export default router;
