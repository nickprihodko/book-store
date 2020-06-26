const sequelize = require("../config/db");
const Sequelize = require("sequelize");

const Category = require("../models/Category");
const Rate = require("../models/Rate");
const Favorite = require("../models/Favorite");

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

  cover: {
    type: Sequelize.STRING,
    comment: "book's cover",
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
Book.hasMany(Favorite);

module.exports = Book;
