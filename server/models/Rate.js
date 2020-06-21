const sequelize = require("../config/db");
const Sequelize = require("sequelize");

const Book = require("./Book");

const Rate = sequelize.define("rates", {
  id: {
    type: Sequelize.BIGINT,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
    comment: "id",
  },

  rate: {
    type: Sequelize.FLOAT,
    allowNull: false,
    comment: "rating",
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

rate.belongsTo(Book);

module.exports = Rate;
