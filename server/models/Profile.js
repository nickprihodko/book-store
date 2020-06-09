const sequelize = require("../config/db");
const Sequelize = require("sequelize");

const Profile = sequelize.define("profiles", {
  id: {
    type: Sequelize.BIGINT,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },

  user_id: {
    type: Sequelize.BIGINT,
    allowNull: false,
  },

  avatar: {
    type: Sequelize.STRING,
  },

  about: {
    type: Sequelize.TEXT,
  },
});

module.exports = Profile;
