import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import bcrypt from 'bcryptjs';
import jwtSign from '../utils/jwtSign';

import User from '../models/User';

export const authenticateUser = async (req: Request, res: Response) => {
  try {
    const user = await User.findOne({
      attributes: ["id", "name", "email", "password", "avatar", "about"],
      where: { id: req['user'].id },
    });

    return res.json(user);
  } catch (err) {
    console.log("authenticateUser error:", err.message);
    res.status(500).json({ message: err.message });
  }
};

export const registerUser = async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  console.log('registerUser -> req.body:', req.body);
  const { email, password } = req.body;

  try {
    // See if user exists
    let user = await User.findOne({
      where: {
        email,
      },
    });

    if (!user) {
      return res.status(400).json({ errors: [{ msg: "Invalid credentials" }] });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ errors: [{ msg: "Invalid credentials" }] });
    }

    // Return JWT
    const token = jwtSign(user);
    res.json({ token });
  } catch (err) {
    console.log("registerUser error:", err.message);
    res.status(500).json({ message: err.message });
  }
};
