import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import { validationResult } from 'express-validator';
import jwtSign from '../utils/jwtSign';

import User from '../models/User';

export const registerUser = async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, email, password } = req.body;

  try {
    // See if user exists
    let user = await User.findOne({
      where: {
        email,
      }
    });

    if (user) {
      return res.status(400).json({ errors: [{ msg: "User already exists" }] });
    }

    user = new User({
      name,
      email,
      password,
    });

    // Encrypt password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
    await user.save();

    // Return JWT
    const token = jwtSign(user);
    res.json({ token });
  } catch (err) {
    console.log("registerUser:", err.message);
    res.status(500).json({ message: err.message });
  }
};

// get user
export const getUser = async (req: Request, res: Response) => {
  try {
    const user = await User.findOne({
      attributes: ["id", "name", "email", "password", "avatar", "about"],
      where: {
        id: (req['user'] as any).id,
      },
    });

    if (!user) {
      return res.status(400).json({ msg: "There is no user" });
    }

    return res.json(user);
  } catch (err) {
    console.log("getUser:", err.message);
    res.status(500).json({ message: err.message });
  }
};

// update user
export const updateUser = async (req: Request, res: Response) => {
  if (req['file']) {
    req.body.avatar = `/images/uploads/${(req['file'] as any).filename}`;
  }

  try {
    let user = await User.findOne({
      where: {
        id: (req['user'] as any).id,
      },
    });
    if (user) {
      await User.update(
        { about: req.body.about, avatar: req.body.avatar },
        { where: { id: (req['user'] as any).id } }
      );
      const user = await User.findOne({
        where: { id: (req['user'] as any).id },
      });
      return res.json(user);
    } else {
      user = new User({
        id: (req['user'] as any).id,
        about: req.body.about,
        avatar: req.body.avatar,
      });
      await user.save();
    }

    return res.json(user);
  } catch (err) {
    console.log("updateUser:", err.message);
    res.status(500).json({ message: err.message });
  }
};
