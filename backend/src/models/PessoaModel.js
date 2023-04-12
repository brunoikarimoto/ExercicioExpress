const mongoose = require("mongoose");

const PessoaModelSchema = new mongoose.Schema({
    cpf: String,
    nome: String,
    idade: Number,
    ssalario: Number,
});

module.exports = mongoose.model("Pessoa", PessoaModelSchema);