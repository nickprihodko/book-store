const sequelize = require("../config/db");
const { QueryTypes } = require("sequelize");

exports.getUserFavoritesBooks = async (req, res) => {
  try {
    const userFavoritesBooks = await sequelize.query(
      `
      SELECT b.id, b.title, b.author, b.price, b.description, b.rate, b.fragment, b."categoryId", b.cover
      FROM books b
      INNER JOIN favorites f ON f."bookId" = b.id
      WHERE f."userId" = :userid
      `,
      {
        replacements: { userid: req.user.id },
        type: QueryTypes.SELECT,
      }
    );
    res.json(userFavoritesBooks);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server Error");
  }
};
