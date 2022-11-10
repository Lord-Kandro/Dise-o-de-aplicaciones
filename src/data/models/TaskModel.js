const { DataTypes } = require("sequelize");

module.exports = model;


function model(sequelize) {
  const attributes = {
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING, default: "none" },
    beforeTo:  { type: DataTypes.DATEONLY },
    isLate:  { type: DataTypes.BOOLEAN, default: false}
  };


  return sequelize.define("task", attributes);
}
