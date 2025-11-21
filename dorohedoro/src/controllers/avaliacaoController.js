var avaliacaoModel = require("../models/avaliacaoModel");

function avaliarVolume(req, res) {

    var avaliacao = req.body.avaliacaoServer; 
    var darNota = req.body.notaServer;        
    var volume = req.body.volumeServer;       

    if (avaliacao == undefined) {
        return res.status(400).send("A avaliação está undefined.");
    }
    if (darNota == undefined) {
        return res.status(400).send("A nota está undefined.");
    }
    if (volume == undefined) {
        return res.status(400).send("O volume está undefined.");
    }


    avaliacaoModel.avaliarVolume(volume, darNota, avaliacao)
        .then(function (resultado) {
            res.json(resultado);
        })
        .catch(function (erro) {
            console.error("Erro ao inserir avaliação:", erro);
            res.status(500).json(erro);
        });
}

module.exports = {
    avaliarVolume
};