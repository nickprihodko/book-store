'use strict';

module.exports = {
  up(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn(
        'rates', // table name
        'userId', // new field name
        {
          type: Sequelize.BIGINT,
          allowNull: false,
          references: {
            model: {
              tableName: 'users',
            },
            key: 'id',
          },
        }
      ),
    ]);
  },

  down(queryInterface, Sequelize) {
    // logic for reverting the changes
    return Promise.all([queryInterface.removeColumn('rates', 'userId')]);
  },
};
