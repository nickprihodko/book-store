const sequelize = require("../config/db");
const Sequelize = require("sequelize");

const Category = sequelize.define("categories", {
  id: {
    type: Sequelize.BIGINT,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
    comment: "id",
  },

  name: {
    type: Sequelize.STRING,
    comment: "categories name",
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

module.exports = Category;
