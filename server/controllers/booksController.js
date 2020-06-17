const Book = require("../models/Book");

exports.getBooks = async (req, res) => {
  try {
    const queryParams = {
      where: { categoryId: req.query.category },
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
