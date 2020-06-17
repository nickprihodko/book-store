const sequelize = require("../config/db");
const Sequelize = require("sequelize");

const Book = require("../models/Book");
const User = require("../models/User");

const Post = sequelize.define("posts", {
  id: {
    type: Sequelize.BIGINT,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
    comment: "id",
  },

  text: {
    type: Sequelize.TEXT,
    comment: "post's text",
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

Post.belongsTo(Book);
Post.belongsTo(User);

module.exports = Post;
