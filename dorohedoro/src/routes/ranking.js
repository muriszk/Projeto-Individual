// src/routes/ranking.js  
var express = require("express");
var router = express.Router();
var rankingController = require("../controllers/rankingController");

router.get("/geral", function (req, res) {
    rankingController.rankingGeral(req, res);
});

module.exports = router;
