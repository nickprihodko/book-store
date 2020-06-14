const sequelize = require("../config/db");
const Sequelize = require("sequelize");

const User = require("./User");

const Profile = sequelize.define("profiles", {
  id: {
    type: Sequelize.BIGINT,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
    comment: "id",
  },

  avatar: {
    type: Sequelize.BLOB,
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

Profile.belongsTo(User);

module.exports = Profile;
