// importação da aplicação
const app = require('./app')

// importação das variáveis de ambiente
require('dotenv').config();
const PORT= process.env.PORT;


// inicialização do servidor
app.listen(PORT, ()=>{console.log('Conectado')})



