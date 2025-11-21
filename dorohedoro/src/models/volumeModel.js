var database = require("../database/config");

function listar() {
    var instrucao = `
        SELECT * FROM volume;
    `;
    return database.executar(instrucao);
}

function criar(nomeVolume, numeroVolume, idUsuario) {
    var instrucao = `
        INSERT INTO volume (nomeVolume, numeroVolume, idUsuario)
        VALUES (
         '${nomeVolume}',
         '${numeroVolume}',
          ${idUsuario});
    `;
    return database.executar(instrucao);
}

module.exports = {
    listar,
    criar
}
