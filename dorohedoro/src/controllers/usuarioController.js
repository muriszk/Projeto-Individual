var usuarioModel = require("../models/usuarioModel");
// var aquarioModel = require("../models/aquarioModel");

function autenticar(req, res) { // começo function autenticar
    var nome = req.body.emailServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Digite um e-mail válido, <br> usuário de magia!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else if (nome == undefined) {
        res.status(400).send("Seu nome está indefinida!");
    } else{
        usuarioModel.autenticar(email, senha)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    res.json({
                        // nome: req.body.nomeServer,
                        email: req.body.emailServer,
                        senha: req.body.senhaServer
                    });


                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);

                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("Email inválido");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo logi");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}


function cadastrar(req, res) {
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;


    if (email == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else {

        usuarioModel.cadastrar(nome, email, senha)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}
// testandosss
module.exports = {
    autenticar,
    cadastrar
}