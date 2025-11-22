var dashboardModel = require("../models/dashboardModel");

function volMain(req, res) {
    dashboardModel.listarVolMain()
        .then(resultado => res.json(resultado))
        .catch(erro => res.status(500).json(erro));
}

function medias(req, res) {
    dashboardModel.listarMedias()
        .then(resultado => res.json(resultado))
        .catch(erro => res.status(500).json(erro));
}

function ranking(req, res) {
    dashboardModel.listarRanking()
        .then(resultado => res.json(resultado))
        .catch(erro => res.status(500).json(erro));
}

// function engajamento(req, res) {
//     dashboardModel.listarEngajamento()
//         .then(resultado => res.json(resultado))
//         .catch(erro => res.status(500).json(erro));
// }

module.exports = {
    volMain,
    medias,
    ranking
    // engajamento
}
