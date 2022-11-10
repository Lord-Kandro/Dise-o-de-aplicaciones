const { DataTypes, Sequelize } = require("sequelize");

module.exports = model;


function model(sequelize) {
  const attributes = {};
  
 
  const members = sequelize.define("members", attributes);
  return members;
}
