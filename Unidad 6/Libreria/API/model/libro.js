const crypto = require("crypto");
class Libro {
  constructor(titulo, autor, anio) {
    this.titulo = titulo;
    this.autor = autor;
    this.anio = anio;
    this.id = generateUUID();
  }
  static createBook(titulo, autor, anio, id) {
    const libro = new Libro();
    libro.titulo = titulo;
    libro.autor = autor;
    libro.anio = anio;
    libro.id = id;
    return libro;
  }
}

function generateUUID() {
  return crypto.randomUUID();
}

module.exports = Libro;
