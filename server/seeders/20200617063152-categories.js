"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("categories", [
      {
        name: "Suspense",
      },
      {
        name: "Fantasy",
      },
      {
        name: "Classic ",
      },
      {
        name: "Western",
      },
      {
        name: "Crime",
      },
      {
        name: "Poetry",
      },

      {
        name: "Comic Book",
      },
      {
        name: "Science fiction",
      },
      {
        name: "Action and adventure",
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("categories", null, {});
  },
};
