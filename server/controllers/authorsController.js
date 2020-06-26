const Sequelize = require("sequelize");

const Book = require("../models/Book");

exports.getAuthors = async (req, res) => {
  try {
    const queryParams = {
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
