const sequelize = require("../config/db");
const Sequelize = require("sequelize");

const Rate = require("../models/Rate");

const User = sequelize.define("users", {
  id: {
    type: Sequelize.BIGINT,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
    comment: "id",
  },

  name: {
    type: Sequelize.STRING,
    allowNull: false,
    comment: "user's name",
  },

  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    comment: "user's email",
  },

  password: {
    type: Sequelize.STRING,
    allowNull: false,
    comment: "password",
  },

  avatar: {
    type: Sequelize.STRING,
    comment: "user's avatar",
  },

  about: {
    type: Sequelize.TEXT,
    comment: "about",
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

// User.hasMany(Rate);

module.exports = User;
