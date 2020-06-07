const Sequelize = require("sequelize");

const sequelizeProfile = new Sequelize("bookstore", "postgres", "sys123", {
  dialect: "postgres",
  host: "localhost",
  define: {
    timestamps: false,
  },
});

const Profile = sequelizeProfile.define("profiles", {
  id: {
    type: Sequelize.BIGINT,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },

  user_id: {
    type: Sequelize.BIGINT,
    allowNull: false,
  },

  avatar: {
    type: Sequelize.STRING,
  },

  about: {
    type: Sequelize.TEXT,
  },
});

// Profile.belongsTo(User, { foreignKey: "user_id", sourceKey: "id" });

sequelizeProfile
  .sync()
  .then((result) => {
    // console.log(result);
  })
  .catch((err) => console.log(err));

module.exports = Profile;
