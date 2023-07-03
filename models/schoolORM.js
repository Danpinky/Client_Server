const {DataTypes } = require("sequelize");
const db = require('./index')

const SchoolORM = db.define("school", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name:{
        type:DataTypes.INTEGER,
      },
      school_level:{
        type:DataTypes.STRING
      },
      students_number:{
        type:DataTypes.INTEGER
      }
})


module.exports = SchoolORM