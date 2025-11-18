var avaliacaoModel = require("../models/avaliacaoModel");


function avaliarVolume(req, res) {
    var avaliacao = req.body.avaliacaoServer;
    var darNota = req.body.notaServer;
    var volume = req.body.volumeServer;

    if (avaliacao == undefined) {
        res.status(400).send("Sua avaliação está udefined");
    } else if (darNota == undefined) {
        res.status(400).send("Sua nota não foi cadastrada");
    } else if (volume == undefined) {
        res.status(400).send("o volume está undefined");
    } else {
        avaliacaoModel.avaliarVolume(avaliacao)
            .then(
                function (avaliacao) {
                    res.json(avaliacao);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    res.status(500).json(erro.sqlMessage);
                }
            )
    }
}


module.exports = {
    avaliarVolume
}