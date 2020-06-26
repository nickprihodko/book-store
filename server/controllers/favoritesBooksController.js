const Book = require("../models/Book");
const Favorite = require("../models/Favorite");

exports.getUserFavoritesBooks = async (req, res) => {
  try {
    const userFavoritesBooks = await Book.findAll({
      attributes: [
        "id",
        "title",
        "author",
        "price",
        "rate",
        "description",
        "fragment",
        "cover",
        "categoryId",
      ],
      include: [
        {
          model: Favorite,
          where: { userId: req.user.id },
          attributes: [],
          required: true,
        },
      ],
    });
    return res.json(userFavoritesBooks);
  } catch (err) {
    console.log("getUserFavoritesBooks:", err.message);
    res.status(500).json({ message: err.message });
  }
};
