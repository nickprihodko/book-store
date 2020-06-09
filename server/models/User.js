const sequelize = require("../config/db");
const Sequelize = require("sequelize");

const User = sequelize.define("users", {
  id: {
    type: Sequelize.BIGINT,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },

  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },

  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  date: {
    type: Sequelize.DATE,
  },
});

module.exports = User;
