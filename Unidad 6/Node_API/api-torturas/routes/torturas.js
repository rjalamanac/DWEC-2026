var express = require("express");
var router = express.Router();

let Tortura = require("../models/torturaModel");
const arrayTorturas = [];
let contador = 0;

router.get("/:id", (req, res) => {
  let tortura = arrayTorturas.filter((x) => x.id == req.params.id);
  if (tortura.length === 0) {
    res.status(404).send("Not Found");
  } else {
    res.json(tortura);
  }
});

router.get("/", function (req, res, next) {
  res.json(arrayTorturas);
});

router.post("/", function (req, res, next) {
  const tortura = new Tortura(
    contador,
    req.body.nombre,
    req.body.annioCreacion,
    req.body.mortal,
    req.body.url,
    req.body.dolor
  );
  arrayTorturas.push(tortura);
  contador++;
  res.status(201).json(tortura);
});

router.delete("/:id", (req, res) => {
  let arrayTorturasFiltrado = arrayTorturas.filter(
    (x) => x.id != req.params.id
  );
  if (arrayTorturasFiltrado.length === arrayTorturas.length) {
    res.status(404).send("Not Found");
  } else {
    arrayTorturas = arrayTorturasFiltrado;
    res.send(true);
  }
});

router.put("/:id", (req, res) => {
  let tortura = undefined;
  for (let index = 0; index < arrayTorturas.length; index++) {
    if (parseInt(req.params.id) === arrayTorturas[index].id) {
      tortura = new Tortura(
        arrayTorturas[index].id,
        req.body.nombre,
        req.body.annioCreacion,
        req.body.mortal,
        req.body.url,
        req.body.dolor
      );
      arrayTorturas[index] = tortura;
      res.json(tortura);
    }
  }

  if (!tortura) {
    res.status(404).send("Not Found");
  }
});

module.exports = router;
