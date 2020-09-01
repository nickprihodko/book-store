'use strict';

const { makePassword } = require('../utils/makePassword');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let password = await makePassword('123456');
    queryInterface.bulkInsert(
      'users',
      [
        {
          name: 'Alex Smith',
          email: 'alex@gmail.com',
          password,
          about: 'This is Alex Smith',
        },
        {
          name: 'Sara Smith',
          email: 'sara@gmail.com',
          password,
          about: 'This is Sara Smith',
        },
        {
          name: 'Joe Doe',
          email: 'joe@gmail.com',
          password,
          about: 'This is Joe Doe',
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  },
};
