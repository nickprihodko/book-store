const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");

const {
  getPosts,
  addPost,
  deletePost,
} = require("../../controllers/postsController");

// @route GET /
// @desc Get posts
// @access Public
router.get("/:id", [], getPosts);

// @route POST /
// @desc Add post
// @access Private
router.post("/", auth, addPost);

// @route DELETE /
// @desc Delete posts
// @access Private
router.delete("/:id", [], deletePost);

module.exports = router;
