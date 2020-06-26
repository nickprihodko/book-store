const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");

const {
  getReviews,
  addReview,
  deleteReview,
} = require("../../controllers/reviewController");

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

module.exports = router;
