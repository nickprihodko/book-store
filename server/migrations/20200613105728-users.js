"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("users", {
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
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("users");
  },
};
