const sequelize = require("../config/db");
const Sequelize = require("sequelize");

const Book = require("./Book");
const User = require("./User");

const Review = sequelize.define("reviews", {
  id: {
    type: Sequelize.BIGINT,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
    comment: "id",
  },

  text: {
    type: Sequelize.TEXT,
    comment: "review's text",
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

Review.belongsTo(Book);
Review.belongsTo(User);

module.exports = Review;
