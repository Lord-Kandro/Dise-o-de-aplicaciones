const { DataTypes } = require("sequelize");

module.exports = model;

//Definimos el modelo para la entidad "Category"
function model(sequelize) {
  const attributes = {
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING, default: "none" },
  };

  //Ejecutamos la creación de las tablas en la base de datos.
  return sequelize.define("category", attributes);
}
