const sequelize = require("../config/db");
const { QueryTypes } = require("sequelize");
const { Op } = require("sequelize");
const Book = require("../models/Book");
const Rate = require("../models/Rate");
const Favorite = require("../models/Favorite");

exports.getBooks = async (req, res) => {
  try {
    const whereParams = {};

    if (req.query) {
      if (req.query.category) {
        whereParams.categoryId = req.query.category;
      }
      if (req.query.author) {
        whereParams.author = req.query.author;
      }

      if (req.query.pricefrom) {
        whereParams.price = {
          [Op.between]: [req.query.pricefrom, req.query.priceto],
        };
      }
      if (req.query.ratefrom) {
        whereParams.rate = {
          [Op.between]: [req.query.ratefrom, req.query.rateto],
        };
      }
    }

    const queryParams = {
      where: whereParams,
      order: [[req.query.sort ? req.query.sort : "id", "ASC"]],
      attributes: ["id", "title", "author", "price", "rate"],
    };

    const books = await Book.findAll(queryParams);
    res.json(books);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server Error");
  }
};

exports.getBook = async (req, res) => {
  try {
    // if authenticated then return book with user rate
    if (req.user) {
      const book = await Book.findOne({
        attributes: [
          "id",
          "title",
          "author",
          "price",
          "rate",
          "description",
          "fragment",
        ],
        where: { id: req.params.id },
        include: [
          {
            model: Rate,
            where: { userId: req.user.id },
            attributes: [["rate", "userrate"]],
            required: false,
          },
        ],
      });
      res.json(book);
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
        ],
      };
      const book = await Book.findOne(queryParams);
      res.json(book);
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server Error");
  }
};

exports.addBook = async (req, res) => {
  try {
    const {
      data: { title, author, category, description, fragment, price },
    } = req.body;

    const newBook = new Book({
      title: title,
      author: author,
      categoryId: category,
      description: description,
      fragment: fragment,
      price: price,
      rate: 0,
    });

    await newBook.save();

    res.json(newBook);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server Error");
  }
};

exports.setRating = async (req, res) => {
  try {
    const {
      data: { rate, bookId },
    } = req.body;

    // see if rate for this book and user exists
    const rating = await Rate.findOne({
      where: { bookId, userId: req.user.id },
      attributes: ["id"],
    });

    if (rating) {
      await Rate.update({ rate }, { where: { bookId, userId: req.user.id } });
    } else {
      await Rate.create({ rate, bookId, userId: req.user.id });
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
      ],
      where: { id: bookId },
      include: [
        {
          model: Rate,
          where: { userId: req.user.id },
          attributes: [["rate", "userrate"]],
          required: false,
        },
      ],
    });
    res.json(book);
    // const book = await sequelize.query(
    //   `
    //   SELECT b.rate, r.rate as userrate
    //     FROM books b
    //     LEFT JOIN rates r ON r."bookId" = b.id AND r."userId" = :userid
    //   WHERE b.id = :bookid
    //   `,
    //   {
    //     replacements: { userid: req.user.id, bookid: bookId },
    //     type: QueryTypes.SELECT,
    //   }
    // );
    // res.json(book);

    // const book = await Book.findOne({
    //   where: { id: bookId },
    //   attributes: ["rate"],
    // });
    // res.json(book);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server Error");
  }
};

exports.setFavorite = async (req, res) => {
  try {
    const {
      data: { isFavorite, bookId, userId },
    } = req.body;

    if (isFavorite) {
      const newFavorite = new Favorite({
        bookId,
        userId: req.user.id,
      });

      await newFavorite.save();
    } else {
      await Favorite.destroy({
        where: {
          bookId,
          userId: req.user.id,
        },
      });
    }

    const queryParams = {
      where: { userId: req.user.id },
      attributes: ["bookId"],
    };

    const favorites = await Favorite.findAll(queryParams);
    const mappedFavorites = favorites.map((item) => item.bookId);
    res.json(mappedFavorites);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server Error");
  }
};
