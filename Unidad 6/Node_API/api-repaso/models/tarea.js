const crypto = require("crypto");
class Tarea {
  constructor(nombre, descripcion) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.dateCreation = new Date(Date.now());
    this.id = generateUUID();
  }
  static createTarea(nombre, descripcion, dateCreation, id) {
    const tarea = new Tarea();
    tarea.nombre = nombre;
    tarea.descripcion = descripcion;
    tarea.dateCreation = dateCreation;
    tarea.id = id;
    return tarea;
  }
}

function generateUUID() {
  return crypto.randomUUID();
}

module.exports = Tarea;
