var database = require("../database/config");

function listarVolMain() {
    var query = `SELECT * FROM volMainAvaliados;`;
    return database.executar(query);
}

function listarMedias() {
    var query = `SELECT * FROM mediaAvaliacoes;`;
    return database.executar(query);
}

function listarRanking() {
    var query = `SELECT * FROM rankingGeral;`;
    return database.executar(query);
}

function listarEngajamento() {
    var query = `SELECT * FROM engajamento;`;
    return database.executar(query);
}

module.exports = {
    listarVolMain,
    listarMedias,
    listarRanking,
    listarEngajamento
}
