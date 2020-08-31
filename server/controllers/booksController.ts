import { Request, Response } from 'express';
import { Op, FindOptions } from 'sequelize';
import paginate from 'jw-paginate';

import Book from '../models/Book';
import Rate from '../models/Rate';
import Favorite from '../models/Favorite';

export const getBooks = async (req: Request, res: Response) => {
  try {
    const whereParams = {};

    if (req.query) {
      if (req.query.category) {
        whereParams['categoryId'] = req.query.category;
      }
      if (req.query.author) {
        whereParams['author'] = req.query.author;
      }

      if (req.query.pricefrom) {
        whereParams['price'] = {
          [Op.between]: [req.query.pricefrom, req.query.priceto],
        };
      }
      if (req.query.ratefrom) {
        whereParams['rate'] = {
          [Op.between]: [req.query.ratefrom, req.query.rateto],
        };
      }
    }

    const queryParams: FindOptions = {
      where: whereParams,
      order: [[(req.query as any).sort ? (req.query as any).sort : "id", "ASC"]],
      attributes: ["id", "title", "author", "price", "rate", "cover"],
    };

    const books = await Book.findAll(queryParams);

    const page = parseInt((req.query as any).page) || 1;
    const pageSize = 4;
    const pager = paginate(books.length, page, pageSize);
    const pageOfItems = books.slice(pager.startIndex, pager.endIndex + 1);

    return res.json({ pager, pageOfItems });
  } catch (err) {
    console.log("getBooks:", err.message);
    res.status(500).json({ message: err.message });
  }
};

export const getBook = async (req: Request, res: Response) => {
  try {
    // if authenticated then return book with user rate
    if (req['user']) {
      const book = await Book.findOne({
        attributes: [
          "id",
          "title",
          "author",
          "price",
          "rate",
          "description",
          "fragment",
          "cover",
        ],
        where: { id: req.params.id },
        include: [
          {
            model: Rate,
            where: { userId: req['user'].id },
            attributes: [["rate", "userrate"]],
            required: false,
          },
        ],
      });
      return res.json(book);
    } else {
      const queryParams = {
        where: { id: req.params.id },
        attributes: [
          "id",
          "title",
          "author",
          "price",
          "rate",
          "description",
          "fragment",
          "cover",
        ],
      };
      const book = await Book.findOne(queryParams);
      return res.json(book);
    }
  } catch (err) {
    console.log("getBook:", err.message);
    res.status(500).json({ message: err.message });
  }
};

export const addBook = async (req: Request, res: Response) => {
  try {
    const {
      data: { title, author, category, description, fragment, price },
    } = req.body;

    const newBook = new Book({
      title,
      author,
      categoryId: category,
      description,
      fragment,
      price,
      rate: 0,
    });

    await newBook.save();
    return res.json(newBook);
  } catch (err) {
    console.log("addBook:", err.message);
    res.status(500).json({ message: err.message });
  }
};

export const setRating = async (req: Request, res: Response) => {
  try {
    const {
      data: { rate, bookId },
    } = req.body;

    // see if rate for this book and user exists
    const rating = await Rate.findOne({
      where: { bookId, userId: req['user'].id },
      attributes: ["id"],
    });

    if (rating) {
      await Rate.update({ rate }, { where: { bookId, userId: req['user'].id } });
    } else {
      await Rate.create({ rate, bookId, userId: req['user'].id });
    }

    // find rate from book and user's rate
    const book = await Book.findOne({
      attributes: [
        "id",
        "title",
        "author",
        "price",
        "rate",
        "description",
        "fragment",
        "cover",
      ],
      where: { id: bookId },
      include: [
        {
          model: Rate,
          where: { userId: req['user'].id },
          attributes: [["rate", "userrate"]],
          required: false,
        },
      ],
    });
    return res.json(book);
  } catch (err) {
    console.log("setRating:", err.message);
    res.status(500).json({ message: err.message });
  }
};

export const setFavorite = async (req: Request, res: Response) => {
  try {
    const {
      data: { isFavorite, bookId, userId },
    } = req.body;

    if (isFavorite) {
      await Favorite.create({ bookId, userId: req['user'].id });
    } else {
      await Favorite.destroy({
        where: {
          bookId,
          userId: req['user'].id,
        },
      });
    }

    const queryParams = {
      where: { userId: req['user'].id },
      attributes: ["bookId"],
    };

    const favorites = await Favorite.findAll(queryParams);
    const mappedFavorites = favorites.map((item) => item.bookId);
    return res.json(mappedFavorites);
  } catch (err) {
    console.log("setFavorite:", err.message);
    res.status(500).json({ message: err.message });
  }
};

export const setBookCover = async (req: Request, res: Response) => {
  if (req['file']) {
    req.body.cover = `/images/uploads/${req['file'].filename}`;
  }

  try {
    let book = await Book.findOne({
      where: {
        id: req.body.bookId,
      },
    });

    if (book) {
      await Book.update(
        { cover: req.body.cover },
        { where: { id: req.body.bookId } }
      );
      const book = await Book.findOne({
        where: {
          id: req.body.bookId,
        },
      });
      return res.json(book);
    }
  } catch (err) {
    console.log("getBookCover:", err.message);
    res.status(500).json({ message: err.message });
  }
};
