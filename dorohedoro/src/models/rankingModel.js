// src/models/rankingModel.js  
var database = require("../database/config");

function listarRankingGeral() {
    var instrucao = `
        SELECT * FROM rankingGeral;
    `;
    return database.executar(instrucao);
}

module.exports = {
    listarRankingGeral
};
