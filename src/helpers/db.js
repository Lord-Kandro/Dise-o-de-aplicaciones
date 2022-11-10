// const tedious = require("tedious");
// const { Sequelize } = require("sequelize");

// const { dbName, dbConfig } = require("../../config.json");

// module.exports = db = {};

// initialize();

// //para iniciar y actualizar
// async function initialize() {
//   const dialect = "mssql";
//   const host = dbConfig.server;
//   const { userName, password } = dbConfig.authentication.options;

//   //Ejecucion de la creacion o verificacion de la base de datos.
//   await ensureDbExists(dbName);

//   // configuracion de conexion a la base de datos. viene de config.json
//   const sequelize = new Sequelize(dbName, userName, password, {
//     host,
//     dialect,
//   });

//   // Iniciamos el modelo y lo exportamos para usarse por el objeto "db"
//   //groups, task, category y user se crean en la base de datos al correr la aplicación
//   db.groups = require("../data/models/GroupModel")(sequelize);
//   db.task = require("../data/models/TaskModel")(sequelize);
//   db.category = require("../data/models/CategoryModel")(sequelize);
//   db.user = require("../data/models/UserModel")(sequelize);
//   db.members = require("../data/models/MembersModel")(sequelize);

//   //si existieran en la base de datos estas tablas, se sincronizan los cambios automaticamente.
//   //Esto lo hace el ORM Sequelize
//   await sequelize.sync({ alter: false }); //Desactivamos el alter para que no borres datos una vez la base de datos es creada.
// }

// //Funcion proveida por la documentación para la creación de la base de datos automaticamente.
// async function ensureDbExists(dbName) {
//   return new Promise((resolve, reject) => {
//     const connection = new tedious.Connection(dbConfig);
//     connection.connect((err) => {
//       if (err) {
//         console.error(err);
//         reject(`Connection Failed: ${err.message}`);
//       }

//       //Comando que la crea si no existe.
//       const createDbQuery = `IF NOT EXISTS(SELECT * FROM sys.databases WHERE name = '${dbName}') CREATE DATABASE [${dbName}];`;
//       const request = new tedious.Request(createDbQuery, (err) => {
//         if (err) {
//           console.error(err);
//           reject(`Create DB Query Failed: ${err.message}`);
//         }

//         resolve();
//       });

//       connection.execSql(request);
//     });
//   });
// }

module.exports={}
