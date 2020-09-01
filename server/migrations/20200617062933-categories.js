'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('categories', {
      id: {
        type: Sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        comment: 'id',
      },

      name: {
        type: Sequelize.STRING,
        comment: 'categories name',
      },

      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      },

      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('categories');
  },
};
