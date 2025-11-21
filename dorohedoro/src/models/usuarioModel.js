var database = require("../database/config")

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL");

    var instrucaoSql = `
        SELECT  emailUsuario, senhaUsuario
        FROM usuario 
        WHERE emailUsuario =  '${email}' AND senhaUsuario = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);

    return database.executar(instrucaoSql);
}

function cadastrar(nome, email, senha) {
    console.log("ACESSEI O USUARIO MODEL");

    var instrucaoSql = `
        INSERT INTO usuario (idUsuario, nomeUsuario, emailUsuario, senhaUsuario) 
        VALUES (default,
         '${nome}',
         '${email}',
         '${senha}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);

    return database.executar(instrucaoSql);
}

module.exports = {
    autenticar,
    cadastrar
}
