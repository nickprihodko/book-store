"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("books", {
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
    return queryInterface.dropTable("books");
  },
};
