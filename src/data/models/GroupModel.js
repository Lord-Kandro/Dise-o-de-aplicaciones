const { DataTypes } = require("sequelize");

module.exports = model;


function model(sequelize) {
  const attributes = {
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING, default: "none" },
  };


  return sequelize.define("group", attributes);
}
