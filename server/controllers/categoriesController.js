const Category = require("../models/Category");

exports.getCategories = async (req, res) => {
  try {
    const queryParams = {
      order: [["name", "ASC"]],
      attributes: ["id", "name"],
    };

    const category = await Category.findAll(queryParams);
    return res.json(category);
  } catch (err) {
    console.log("getCategories:", err.message);
    res.status(500).json({ message: err });
  }
};
