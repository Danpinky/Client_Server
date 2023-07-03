const {DataTypes } = require("sequelize");
const db = require('./index')

const ProductORM = db.define("products", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  rating: {
    type: DataTypes.NUMBER,
  },
  description: {
    type: DataTypes.STRING,
  },
  price: {
    type: DataTypes.NUMBER
  },
  image:{
    type:DataTypes.TEXT
  }
});

module.exports = ProductORM;