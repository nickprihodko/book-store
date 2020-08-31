import { Router } from 'express';
const router = Router();
import { check } from 'express-validator';

import auth from '../../middleware/auth';

import {
  authenticateUser,
  registerUser,
} from '../../controllers/authController';

// @route GET api/auth
// @desc Authenticate user & get token
// @access Public
router.get("/", auth, authenticateUser);

// @route POST api/auth
// @desc Register user
// @access Public
router.post(
  "/",
  [],
  registerUser
);

export default router;