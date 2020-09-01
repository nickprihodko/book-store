import { Response } from 'express';

import { IRequest } from '../interfaces';

import Book from '../models/Book';
import Favorite from '../models/Favorite';

export const getUserFavoritesBooks = async (req: IRequest, res: Response) => {
  try {
    const userFavoritesBooks = await Book.findAll({
      attributes: [
        'id',
        'title',
        'author',
        'price',
        'rate',
        'description',
        'fragment',
        'cover',
        'categoryId',
      ],
      include: [
        {
          model: Favorite,
          where: { userId: req.user.id },
          attributes: [],
          required: true,
        },
      ],
    });
    return res.json(userFavoritesBooks);
  } catch (err) {
    console.log('getUserFavoritesBooks:', err.message);
    res.status(500).json({ message: err.message });
  }
};
