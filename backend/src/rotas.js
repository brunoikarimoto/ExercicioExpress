const express = require("express");
const rotas = express.Router();
const PessoaController = require("./controllers/PessoaController");

rotas.get('/pessoa', PessoaController.read);
rotas.post('/pessoa', PessoaController.create);

module.exports = rotas;