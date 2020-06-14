"use strict";

const { makePassword } = require("../utils/makePassword");

const User = require("../models/User");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let password = await makePassword("123456");
    queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Alex Smith",
          email: "alex@gmail.com",
          password,
        },
        {
          name: "Sara Smith",
          email: "sara@gmail.com",
          password,
        },
        {
          name: "Joe Doe",
          email: "joe@gmail.com",
          password,
        },
      ],
      {}
    );
    // first
    const userAlex = await User.findOne({
      where: {
        email: "alex@gmail.com",
      },
    });
    queryInterface.bulkInsert(
      "profiles",
      [
        {
          userId: userAlex.id,
          about: "This is Alex Smith",
        },
      ],
      {}
    );

    //second
    const userSara = await User.findOne({
      where: {
        email: "sara@gmail.com",
      },
    });
    queryInterface.bulkInsert(
      "profiles",
      [
        {
          userId: userSara.id,
          about: "This is Sara Smith",
        },
      ],
      {}
    );

    // third
    const userJoe = await User.findOne({
      where: {
        email: "joe@gmail.com",
      },
    });
    return queryInterface.bulkInsert(
      "profiles",
      [
        {
          userId: userJoe.id,
          about: "This is Joe Doe",
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  },
};
