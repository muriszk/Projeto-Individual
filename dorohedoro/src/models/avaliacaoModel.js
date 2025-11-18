var database = require("../database/config");

function avaliarVolume(avaliacao, darNota, volume){
    console.log('uau, model de avaliacao');

    var instrucaoSql = `
        INSERT INTO avaliacao VALUES (idAvaliacao, idVolume, )
            (default, '${avaliacao}', '${darNota}', '${volume}');
    `

    console.log(instrucaoSql);

    return database.executar(instrucaoSql);
}

module.exports = {
    avaliarVolume
}