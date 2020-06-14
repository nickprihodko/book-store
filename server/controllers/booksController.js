const Book = require("../models/Book");

exports.getBooks = async (req, res) => {
  try {
    const books = await Book.findAll();

    res.json(books);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server Error");
  }
};
