const express = require('express');
const router = require('./router');

// Criação da aplicação 
const app = express();

// Rotas
app.use(router)

module.exports = app;
 