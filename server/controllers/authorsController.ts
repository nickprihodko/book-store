import { Request, Response } from 'express';
import Sequelize, { FindOptions } from 'sequelize';

import Book from '../models/Book';

export const getAuthors = async (req: Request, res: Response) => {
  try {
    const queryParams: FindOptions = {
      order: [["author", "ASC"]],
      attributes: [
        [Sequelize.fn("DISTINCT", Sequelize.col("author")), "author"],
      ],
    };

    const authors = await Book.findAll(queryParams);
    return res.json(authors);
  } catch (err) {
    console.log("getAuthors:", err.message);
    res.status(500).json({ message: err });
  }
};
