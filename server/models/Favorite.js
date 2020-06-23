const sequelize = require("../config/db");
const Sequelize = require("sequelize");

const Book = require("./Book");
const User = require("./User");

const Favorite = sequelize.define("favorites", {
  id: {
    type: Sequelize.BIGINT,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
    comment: "id",
  },

  createdAt: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.fn("now"),
  },

  updatedAt: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.fn("now"),
  },
});

Favorite.belongsTo(Book);
Favorite.belongsTo(User);

module.exports = Favorite;
