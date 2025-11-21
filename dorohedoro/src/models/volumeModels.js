var database = require("../database/config");

function listar() {
    var query = `
        SELECT * FROM volume;
    `;
    return database.executar(query);
}

function ranking() {
    var query = `
        SELECT * FROM rankingGeral;
    `;
    return database.executar(query);
}

module.exports = {
    listar,
    ranking
};
