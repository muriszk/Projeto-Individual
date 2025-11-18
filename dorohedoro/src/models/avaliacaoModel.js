var database = require("../database/config");

function avaliarVolume(volume, darNota, avaliacao){
    console.log('uau, model de avaliacao');

    var instrucaoSql = `
        INSERT INTO avaliacao (idAvaliacao, idVolume, notaAvaliacao, textoAvaliacao) VALUES
            (default, '${volume}','${darNota}', '${avaliacao}');
    `;

    console.log(instrucaoSql);

    return database.executar(instrucaoSql);
}

module.exports = {
    avaliarVolume
}