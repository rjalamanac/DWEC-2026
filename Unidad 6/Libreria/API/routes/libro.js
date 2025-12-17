var express = require("express");
var router = express.Router();

let Libro = require("../model/libro");
let arrayLibros = [];

router.get("/:id", (req, res) => {
  let libro = arrayLibros.filter((x) => x.id == req.params.id);
  if (libro.length === 0) {
    res.status(404).send("Not Found");
  } else {
    res.json(libro);
  }
});

router.get("/", function (req, res, next) {
  res.json(arrayLibros);
});

router.post("/", function (req, res, next) {
  const libro = new Libro(req.body.titulo, req.body.autor, req.body.anio);
  arrayLibros.push(libro);
  res.status(201).json(libro);
});

router.delete("/:id", (req, res) => {
  let arrayLibrosFiltrado = arrayLibros.filter((x) => x.id != req.params.id);
  if (arrayLibrosFiltrado.length === arrayLibros.length) {
    res.status(404).send("Not Found");
  } else {
    arrayLibros = arrayLibrosFiltrado;
    res.send(true);
  }
});

router.put("/:id", (req, res) => {
  let libro = undefined;
  for (let index = 0; index < arrayLibros.length; index++) {
    if (req.params.id === arrayLibros[index].id) {
      const libro = Libro.createBook(
        req.body.titulo,
        req.body.autor,
        req.body.anio,
        arrayLibros[index].id
      );
      arrayLibros[index] = libro;
      res.json(libro);
    }
  }

  if (!libro) {
    res.status(404).send("Not Found");
  }
});

module.exports = router;
