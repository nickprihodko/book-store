const Favorite = require("../models/Favorite");

exports.getFavorites = async (req, res) => {
  const queryParams = {
    where: { userId: req.user.id },
    attributes: ["bookId"],
  };

  const favorites = await Favorite.findAll(queryParams);
  const mappedFavorites = favorites.map((item) => item.bookId);
  return res.json(mappedFavorites);
};
