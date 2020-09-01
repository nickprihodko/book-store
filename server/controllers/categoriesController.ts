import { Request, Response } from 'express';

import Category from '../models/Category';

export const getCategories = async (req: Request, res: Response) => {
  try {
    const category = await Category.findAll({
      order: [['name', 'ASC']],
      attributes: ['id', 'name'],
    });
    return res.json(category);
  } catch (err) {
    console.log('getCategories:', err.message);
    res.status(500).json({ message: err.message });
  }
};
