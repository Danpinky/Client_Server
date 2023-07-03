const {DataTypes } = require("sequelize");
const db = require('./index')

const CompanyORM = db.define("company", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name:{
        type:DataTypes.INTEGER,
      },
      description:{
        type:DataTypes.TEXT
      },
      category:{
        type:DataTypes.STRING
      }
})


module.exports = CompanyORM