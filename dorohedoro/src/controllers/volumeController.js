var volumeModel = require("../models/volumeModel");

function listar(req, res) {
    volumeModel.listar()
        .then(resultado => res.json(resultado))
        .catch(erro => res.status(500).json(erro));
}

function criar(req, res) {
    var nome = req.body.nomeVolume;
    var numero = req.body.numeroVolume;
    var idUsuario = req.body.idUsuario;

    volumeModel.criar(nome, numero, idUsuario)
        .then(() => res.status(201).send("Volume criado"))
        .catch(erro => res.status(500).json(erro));
}

module.exports = {
    listar,
    criar
}
