const express = require("express");

// se importan los controladores 
const TaskController = require("./src/controllers/TaskController");
const GroupController = require("./src/controllers/GroupController");
const UserController = require("./src/controllers/UserController");

const port = 7000;
//Hacemos la instancia para la herramienta
const app = express();

//Establecemos la ruta inicial de la AP, esta es la raiz al correr: localhost:7000
app.get("/", (req, res) => {
  res.send("Welcome to ToDo Tasks");
});

//Agregamos las rutas de los controladores
app.use("/tasks", TaskController);
app.use("/groups", GroupController);
app.use("/users", UserController);

//Asignamos un puerto listen a la aplicación
app.listen(port, () => {
  console.log(`ToDo App is running on port ${port}`);
});

//para ejecutar en tiempo real el servidor
//es npm run dev