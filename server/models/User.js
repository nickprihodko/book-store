const Sequelize = require("sequelize");

const sequelizeUser = new Sequelize("bookstore", "postgres", "sys123", {
  dialect: "postgres",
  host: "localhost",
  scheme: "bookstore",
  define: {
    timestamps: false,
  },
});

const User = sequelizeUser.define("users", {
  id: {
    type: Sequelize.BIGINT,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },

  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },

  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  avatar: {
    type: Sequelize.STRING,
  },

  date: {
    type: Sequelize.DATE,
  },
});

sequelizeUser
  .sync()
  .then((result) => {
    // console.log(result);
  })
  .catch((err) => console.log(err));

module.exports = User;
