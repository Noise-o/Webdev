const express = require('express');

const router = express.Router();

// Rotas vem aqui 
router.get('/',(req, res)=>{res.status(200).send('Router ligado')})

module.exports =  router;