// const Sequelize = require("sequelize");
// const config = require("config");

import { Sequelize } from 'sequelize-typescript';
import config from 'config';

const sequelize = new Sequelize(
  config.get("database"),
  config.get("login"),
  config.get("password"),
  {
    dialect: "postgres",
    host: "localhost",
    define: {
      timestamps: false,
    },
  }
);

export default sequelize;

// module.exports = sequelize;
