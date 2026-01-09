var express = require("express");
var router = express.Router();

let Santa = require("../model/santa-claus");
let arraySantas = [];

router.get("/:id", (req, res) => {
  let santa = arraySantas.filter((x) => x.id == req.params.id);
  if (santa.length === 0) {
    res.status(404).send("Not Found");
  } else {
    res.json(santa);
  }
});

router.get("/", function (req, res, next) {
  res.json(arraySantas);
});

router.post("/", function (req, res, next) {
  const santa = new Santa(
    req.body.peso,
    req.body.regalos,
    req.body.color,
    req.body.nacionalidad
  );
  arraySantas.push(santa);
  res.status(201).json(santa);
});

router.delete("/:id", (req, res) => {
  let arraySantasFiltrado = arraySantas.filter((x) => x.id != req.params.id);
  if (arraySantasFiltrado.length === arraySantas.length) {
    res.status(404).send("Not Found");
  } else {
    arraySantas = arraySantasFiltrado;
    res.send(true);
  }
});

router.put("/:id", (req, res) => {
  let santa = undefined;
  for (let index = 0; index < arraySantas.length; index++) {
    if (req.params.id === arraySantas[index].id) {
      const santa = Santa.createBook(
        req.body.peso,
        req.body.regalos,
        req.body.color,
        req.body.nacionalidad,
        arraySantas[index].id
      );
      arraySantas[index] = santa;
      res.json(santa);
    }
  }

  if (!santa) {
    res.status(404).send("Not Found");
  }
});

module.exports = router;
