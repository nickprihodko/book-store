import { Request, Response } from 'express';

import Favorite from '../models/Favorite';

export const getFavorites = async (req: Request, res: Response) => {
  const queryParams = {
    where: { userId: (req['user'] as any).id },
    attributes: ["bookId"],
  };

  const favorites = await Favorite.findAll(queryParams);
  const mappedFavorites = favorites.map((item) => item.bookId);
  return res.json(mappedFavorites);
};
