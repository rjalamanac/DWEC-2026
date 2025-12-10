var express = require("express");
var router = express.Router();
const MotosService = require("../services/motos-services");

router.get("/", function (req, res, next) {
  res.json(MotosService.get());
});

router.get("/:id", function (req, res, next) {
  const moto = MotosService.getById(req.params.id);
  if (!moto) {
    return res.status(404).json({ error: "Moto not found" });
  }
  res.json(moto);
});

router.delete("/:id", function (req, res, next) {
  const deleted = MotosService.delete(req.params.id);
  if (!deleted) {
    return res.status(404).json({ error: "Moto not found" });
  }
  res.json({ message: "Moto deleted", deleted });
});

router.post("/", function (req, res, next) {
  res.json(MotosService.post(req.body.marca, req.body.modelo, req.body.precio));
});

router.put("/:id", function (req, res, next) {
  const updated = MotosService.update(
    req.params.id,
    req.body.marca,
    req.body.modelo,
    req.body.precio
  );

  if (!updated) {
    return res.status(404).json({ error: "Moto not found" });
  }

  res.json(updated);
});

module.exports = router;
