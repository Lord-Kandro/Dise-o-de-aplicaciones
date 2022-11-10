const express = require("express");
const router = express.Router();
const service = require("../services/CategoryService");

//Indicamos la primera ejecución del router 
router.use((req, res, next) => {
  console.log("Time: ", Date.now()); //ver hora
  next();
});

//De categoria: 
//Obtener todos los registros
router.get("/getAll", (req, res) => {
  res.send("Getting all Categories");
  res.send(service.getAll());
});

//agregar
router.post("/add", (req, res) => {});
//Actualizar
router.put("/edit", (req, res) => {});
//eliminar
router.delete("/remove", (req, res) => {});

//Exportamos el controlador para abrirlo en app.js
module.exports = router;
