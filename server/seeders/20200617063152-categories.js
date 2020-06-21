"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("categories", [
      {
        name: "---",
      },
      {
        name: "Action and adventure",
      },
      {
        name: "Classic ",
      },
      {
        name: "Comic Book",
      },
      {
        name: "Crime",
      },
      {
        name: "Fantasy",
      },
      {
        name: "Poetry",
      },
      {
        name: "Science fiction",
      },
      {
        name: "Suspense",
      },
      {
        name: "Western",
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("categories", null, {});
  },
};
