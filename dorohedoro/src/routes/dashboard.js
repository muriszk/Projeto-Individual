var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.get("/volumes", dashboardController.volMain);
router.get("/medias", dashboardController.medias);
router.get("/ranking", dashboardController.ranking);
// router.get("/engajamento", dashboardController.engajamento);

module.exports = router;
