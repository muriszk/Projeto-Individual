var express = require("express");
var router = express.Router();

var avaliacaoController = require("../controllers/avaliacaoController");

// recebendo avaliação usuário Controller 
router.post("/avaliarVolume", function (req, res) {
    avaliacaoController.avaliar(req, res);
})

// router.post("/darNota", function (req, res) {
//     usuarioController.darNota(req, res);
// });

module.exports = router;