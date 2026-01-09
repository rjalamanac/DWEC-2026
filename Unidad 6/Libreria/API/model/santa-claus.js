const crypto = require("crypto");
class Santa {
  constructor(peso, regalos, color, nacionalidad) {
    this.peso = peso;
    this.regalos = regalos;
    this.color = color;
    this.nacionalidad = nacionalidad;
    this.id = generateUUID();
  }
  static createSanta(peso, regalos, color, nacionalidad) {
    const santa = new Santa();
    santa.peso = peso;
    santa.regalos = regalos;
    santa.color = color;
    santa.nacionalidad = nacionalidad;
    return santa;
  }
}

function generateUUID() {
  return crypto.randomUUID();
}

module.exports = Santa;
