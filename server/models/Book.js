const sequelize = require("../config/db");
const Sequelize = require("sequelize");

const Category = require("../models/Category");
const Rate = require("../models/Rate");

const Book = sequelize.define("books", {
  id: {
    type: Sequelize.BIGINT,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
    comment: "id",
  },

  title: {
    type: Sequelize.STRING,
    allowNull: false,
    comment: "book's title",
  },

  author: {
    type: Sequelize.STRING,
    allowNull: false,
    comment: "author",
  },

  price: {
    type: Sequelize.FLOAT,
    comment: "book's price",
  },

  description: {
    type: Sequelize.TEXT,
    comment: "description",
  },

  rate: {
    type: Sequelize.FLOAT,
    comment: "book's rating",
  },

  fragment: {
    type: Sequelize.TEXT,
    comment: "fragment of a book",
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

Book.belongsTo(Category);
Book.hasMany(Rate);

module.exports = Book;
