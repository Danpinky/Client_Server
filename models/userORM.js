const {DataTypes } = require("sequelize");
const db = require('./index')

// const sequelize = new Sequelize({
//   host: "localhost",
//   username: "root",
//   password: "",
//   database: "porto",
//   dialect: "mysql",
//   define: {
//     timestamps: false,
//   },
// });

const UserORM = db.define("users", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  usersname: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
  },
  avatar: {
    type: DataTypes.STRING,
  },
});

module.exports = UserORM;
