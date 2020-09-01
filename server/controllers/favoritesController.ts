import { Response } from 'express';

import { IRequest } from '../interfaces';

import Favorite from '../models/Favorite';

export const getFavorites = async (req: IRequest, res: Response) => {
  const queryParams = {
    where: { userId: req.user.id },
    attributes: ['bookId'],
  };

  const favorites = await Favorite.findAll(queryParams);
  const mappedFavorites = favorites.map((item) => item.bookId);
  return res.json(mappedFavorites);
};
