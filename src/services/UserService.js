//const db = require('../helpers/db');

const db = {};

module.exports = {
  getAll,
  getById,
  create,
  update,
  delete: _delete,
};

//llamamos a todos los usuarios de la base de datos
async function getAll() {
  return "Aqui se ven todos los usuarios";
}

//llamamos al usuario de la base de datos por id
async function getById(id) {}

//Creamos un nuevo usuario
async function create(params) {
  // validamos que existe
}

async function update(id, params) {}


async function _delete(id){

}
// helper functiones


async function getUser(id) {}
