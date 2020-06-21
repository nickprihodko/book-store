const { Op } = require("sequelize");
const Book = require("../models/Book");

exports.getBooks = async (req, res) => {
  try {
    const whereParams = {};

    if (req.query) {
      if (req.query.category) {
        whereParams.categoryId = req.query.category;
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
