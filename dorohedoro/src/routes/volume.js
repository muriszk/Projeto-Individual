var express = require("express");
var router = express.Router();
var volumeController = require("../controllers/volumeController");

router.get("/listar", volumeController.listar);
router.post("/criar", volumeController.criar);

module.exports = router;
