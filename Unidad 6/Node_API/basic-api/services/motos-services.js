const Moto = require("../models/moto");

class MotosService {
  static motos = [];

  static get() {
    return MotosService.motos;
  }

  static post(marca, modelo, precio) {
    const newMoto = new Moto(marca, modelo, precio);
    MotosService.motos.push(newMoto);
    return newMoto;
  }
}

module.exports = MotosService;
