"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("favorites", {
      id: {
        type: Sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        comment: "id",
      },

      userId: {
        type: Sequelize.BIGINT,
        allowNull: false,
        comment: "users.id",
        references: {
          model: {
            tableName: "users",
          },
          key: "id",
        },
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
    return queryInterface.dropTable("favorites");
  },
};
