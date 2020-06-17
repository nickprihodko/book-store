const Category = require("../models/Category");

exports.getCategories = async (req, res) => {
  try {
    const queryParams = {
      order: [["name", "ASC"]],
      attributes: ["id", "name"],
    };

    const category = await Category.findAll(queryParams);
    res.json(category);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server Error");
  }
};
