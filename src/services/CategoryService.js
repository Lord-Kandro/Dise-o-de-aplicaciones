const db = require('../helpers/db');

module.exports ={
    getAll,
    getById,
    create,
    update,
    delete: _delete,
};

//llamar categorias
async function getAll(){
    return await db.Category.findAll();
}

async function getById(id){
    return await getCategory(id);
}

async function create(params){

}