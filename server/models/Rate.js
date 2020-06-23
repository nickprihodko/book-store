const sequelize = require("../config/db");
const Sequelize = require("sequelize");

// const Book = require("./Book");
// const User = require("./User");

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

  userId: {
    type: Sequelize.BIGINT,
    allowNull: false,
    comment: "users.id",
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

// Rate.belongsTo(Book);
// Rate.belongsTo(User);

module.exports = Rate;
