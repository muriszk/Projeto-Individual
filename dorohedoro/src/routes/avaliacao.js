var express = require("express");
var router = express.Router();

var avaliacaoController = require("../controllers/avaliacaoController");

router.post("/avaliarVolume", function (req, res) {
    avaliacaoController.avaliarVolume(req, res);
});

module.exports = router;
