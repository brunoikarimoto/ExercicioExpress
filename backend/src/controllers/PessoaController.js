const Pessoa = require("../models/PessoaModel");

module.exports = {
    async read(req, res){
        const pessoaList = await Pessoa.find();
        return res.json(pessoaList);
    },

    async create(req, res){
        const {cpf, nome, idade, salario} = req.body;
        const pessoaCriada = await Pessoa.create({
            cpf,
            nome,
            idade,
            salario,
        });
        return res.json(pessoaCriada);
    },
};