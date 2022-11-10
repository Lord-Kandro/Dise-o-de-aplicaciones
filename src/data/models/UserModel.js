const { DataTypes } = require("sequelize");

module.exports = model;


function model(sequelize) {
  const attributes = {
    name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, default: "none" },
    password: { type: DataTypes.STRING, default: "none" },
  };


  return sequelize.define("user", attributes);
}
