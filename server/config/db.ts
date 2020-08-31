import { Sequelize } from 'sequelize-typescript';
import config from 'config';

import User from '../models/User';
import Book from '../models/Book';
import Category from '../models/Category';
import Rate from '../models/Rate';
import Favorite from '../models/Favorite';

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
    models: [__dirname + '../models/**/*.ts'],
    modelMatch: (filename, member) => {
    return filename.substring(0, filename.indexOf('.ts')) === member.toLowerCase();
  },
  }
);

sequelize.addModels([User, Book, Category, Rate, Favorite]);

export default sequelize;