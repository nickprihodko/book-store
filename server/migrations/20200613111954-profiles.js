"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("profiles", {
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
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("profiles");
  },
};
