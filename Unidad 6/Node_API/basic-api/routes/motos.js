var express = require("express");
var router = express.Router();
const MotosService = require("../services/motos-services");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.json(MotosService.get());
});

router.post("/", function (req, res, next) {
  res.json(MotosService.post(req.body.marca, req.body.modelo, req.body.precio));
});

module.exports = router;
