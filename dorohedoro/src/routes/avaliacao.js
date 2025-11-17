var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/avaliar", function (req, res) {
    avaliacaoController.avaliar(req, res);
})

router.post("/darNota", function (req, res) {
    usuarioController.darNota(req, res);
});

module.exports = router;