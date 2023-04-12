require("./config/dbConfig");
const express = require("express");
const rotas = require("./rotas");
const app = express()

app.use(express.json());
app.use(rotas);

app.get("/", function(req, res){
    return res.json({
        nome: "caio",
        idade: "19",
        sexo: "M"
    });
});

app.listen(8081, function(){
    console.log("Servidor rodando.");
});