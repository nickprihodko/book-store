import express from 'express';

// const express = require("express");
const router = express.Router();

// const { getCategories } = require("../../controllers/categoriesController");

import { getCategories } from '../../controllers/categoriesController';

// @route GET /
// @desc Get categories
// @access Public
router.get("/", getCategories);

export default router;

// module.exports = router;
