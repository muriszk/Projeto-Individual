var avaliacaoModel = require("../models/avaliacaoModel");

function avaliarVolume(req, res) {
    var avaliacao = req.body.avaliacaoServer;
    var darNota = req.body.notaServer;
    var volume = req.body.volumeServer;

    if (avaliacao == undefined) {
        res.status(400).send("Sua avaliação está udefined");
    } else if (darNota == undefined) {
        res.status(400).send("Sua nota não foi cadastrada")
    } else {
        avaliacaoModel.avaliar(texto)
    }
}

module.exports = {
    avaliarVolume
}