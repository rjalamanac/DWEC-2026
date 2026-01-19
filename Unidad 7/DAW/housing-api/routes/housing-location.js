var express = require("express");
var router = express.Router();

let HousingLocation = require("../model/housing-location");
let arrayHousingLocations = [];

router.get("/:id", (req, res) => {
  let housingLocation = arrayHousingLocations.filter(
    (x) => x.id == req.params.id,
  );
  if (housingLocation.length === 0) {
    res.status(404).send("Not Found");
  } else {
    res.json(housingLocation);
  }
});

router.get("/", function (req, res, next) {
  res.json(arrayHousingLocations);
});

router.post("/", function (req, res, next) {
  const housingLocation = new HousingLocation(
    req.body.name,
    req.body.city,
    req.body.state,
    req.body.photo,
    req.body.availableUnits,
    req.body.wifi,
    req.body.laundry,
  );
  arrayHousingLocations.push(housingLocation);
  res.status(201).json(housingLocation);
});

router.delete("/:id", (req, res) => {
  let arrayHousingLocationsFiltrado = arrayHousingLocations.filter(
    (x) => x.id != req.params.id,
  );
  if (arrayHousingLocationsFiltrado.length === arrayHousingLocations.length) {
    res.status(404).send("Not Found");
  } else {
    arrayHousingLocations = arrayHousingLocationsFiltrado;
    res.send(true);
  }
});

router.put("/:id", (req, res) => {
  let housingLocation = undefined;
  for (let index = 0; index < arrayHousingLocations.length; index++) {
    if (req.params.id === arrayHousingLocations[index].id) {
      const housingLocation = HousingLocation.createBook(
        req.body.titulo,
        req.body.autor,
        req.body.anio,
        arrayHousingLocations[index].id,
      );
      arrayHousingLocations[index] = housingLocation;
      res.json(housingLocation);
    }
  }

  if (!housingLocation) {
    res.status(404).send("Not Found");
  }
});

module.exports = router;
