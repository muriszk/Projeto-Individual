// src/controllers/rankingController.js  
var rankingModel = require("../models/rankingModel");

function rankingGeral(req, res) {
    rankingModel.listarRankingGeral()
        .then(resultado => {
            res.json(resultado);
        })
        .catch(erro => {
            console.error("Erro ao buscar ranking geral:", erro);
            res.status(500).json({ erro: "Erro no servidor" });
        });
}

module.exports = {
    rankingGeral
};
