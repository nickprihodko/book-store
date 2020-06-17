const Book = require("../models/Book");

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
