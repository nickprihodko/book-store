"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("rates", {
      id: {
        type: Sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        comment: "id",
      },

      bookId: {
        type: Sequelize.BIGINT,
        allowNull: false,
        comment: "books.id",
        references: {
          model: {
            tableName: "books",
          },
          key: "id",
        },
      },

      rate: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: 0,
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
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("rates");
  },
};
