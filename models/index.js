const { Sequelize } = require("sequelize");
const sequelize = new Sequelize({
  host: "localhost",
  username: "root",
  password: "",
  database: "porto.1",
  dialect: "mysql",
  define: {
    timestamps: false,
  },
});

module.exports = sequelize;
