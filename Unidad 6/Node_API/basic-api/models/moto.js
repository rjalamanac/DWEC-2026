const crypto = require("crypto");

class Moto {
  constructor(marca, modelo, precio) {
    this.marca = marca;
    this.modelo = modelo;
    this.precio = precio;
    this.id = generateUUID();
  }
}

function generateUUID() {
  return crypto.randomUUID();
}

module.exports = Moto;
