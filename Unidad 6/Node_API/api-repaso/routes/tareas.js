var express = require("express");
var router = express.Router();

let Tarea = require("../models/tarea");
let arrayTareas = [];

router.get("/:id", (req, res) => {
  let tarea = arrayTareas.filter((x) => x.id == req.params.id);
  if (tarea.length === 0) {
    res.status(404).send("Not Found");
  } else {
    res.json(tarea);
  }
});

router.get("/", function (req, res, next) {
  res.json(arrayTareas);
});

router.post("/", function (req, res, next) {
  const tarea = new Tarea(req.body.nombre, req.body.descripcion);
  arrayTareas.push(tarea);
  res.status(201).json(tarea);
});

router.delete("/:id", (req, res) => {
  let arrayTareasFiltrado = arrayTareas.filter((x) => x.id != req.params.id);
  if (arrayTareasFiltrado.length === arrayTareas.length) {
    res.status(404).send("Not Found");
  } else {
    arrayTareas = arrayTareasFiltrado;
    res.send(true);
  }
});

router.put("/:id", (req, res) => {
  let tarea = undefined;
  for (let index = 0; index < arrayTareas.length; index++) {
    if (req.params.id === arrayTareas[index].id) {
      const tarea = Tarea.createBook(
        req.body.nombre,
        req.body.descripcion,
        req.body.dateCreation,
        arrayTareas[index].id
      );
      arrayTareas[index] = tarea;
      res.json(tarea);
    }
  }

  if (!tarea) {
    res.status(404).send("Not Found");
  }
});

module.exports = router;
