//Importação da conexão
const connection = require('./connection')

// Função que pega todas as taks do BD 
const getAll = async()=>{
    const tasks = await connection.execute('SELECT * FROM tasks')      
    return tasks;
}


module.exports = {
    getAll
}