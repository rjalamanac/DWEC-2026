const Moto = require("../models/moto");

class MotosService {
  static motos = [];

  static get() {
    return MotosService.motos;
  }

  static getById(id) {
    return MotosService.motos.find((m) => m.id === id);
  }

  static post(marca, modelo, precio) {
    const newMoto = new Moto(marca, modelo, precio);
    MotosService.motos.push(newMoto);
    return newMoto;
  }

  static delete(id) {
    const index = MotosService.motos.findIndex((m) => m.id === id);
    if (index === -1) return null;

    return MotosService.motos.splice(index, 1)[0];
  }

  static update(id, marca, modelo, precio) {
    const moto = MotosService.motos.find((m) => m.id === id);
    if (!moto) return null;

    moto.marca = marca;
    moto.modelo = modelo;
    moto.precio = precio;

    return moto;
  }
}

module.exports = MotosService;
