var express = require("express");
var router = express.Router();

let Task = require("../model/task");
let TaskService = require("../service/task-services");
let arrayTasks = [];

router.get("/:id", (req, res) => {
  let task = arrayTasks.filter((x) => x.id == req.params.id);
  if (task.length === 0) {
    res.status(404).send("Not Found");
  } else {
    res.json(task);
  }
});

router.get("/", async function (req, res, next) {
  const task = await TaskService.get();
  res.json(task);
});

router.post("/", function (req, res, next) {
  const task = new Task(req.body.titulo, req.body.autor, req.body.anio);
  arrayTasks.push(task);
  res.status(201).json(task);
});

router.delete("/:id", (req, res) => {
  let arrayTasksFiltrado = arrayTasks.filter((x) => x.id != req.params.id);
  if (arrayTasksFiltrado.length === arrayTasks.length) {
    res.status(404).send("Not Found");
  } else {
    arrayTasks = arrayTasksFiltrado;
    res.send(true);
  }
});

router.put("/:id", (req, res) => {
  let task = undefined;
  for (let index = 0; index < arrayTasks.length; index++) {
    if (req.params.id === arrayTasks[index].id) {
      const task = Task.createBook(
        req.body.titulo,
        req.body.autor,
        req.body.anio,
        arrayTasks[index].id
      );
      arrayTasks[index] = task;
      res.json(task);
    }
  }

  if (!task) {
    res.status(404).send("Not Found");
  }
});

module.exports = router;
