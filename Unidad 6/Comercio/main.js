import { Libro } from "./libro.js";

// Navegación
document.getElementById("logo").addEventListener("click", mostrarHome);
document.getElementById("btnHome").addEventListener("click", mostrarHome);
document
  .getElementById("btnConsultar")
  .addEventListener("click", mostrarConsultar);
document.getElementById("btnCrear").addEventListener("click", mostrarCrear);

document.getElementById("formCrear").addEventListener("submit", crearLibro);
// Array global de libros
const libros = [];

// Navegación
function ocultarTodo() {
  document.getElementById("home").classList.add("hidden");
  document.getElementById("consultar").classList.add("hidden");
  document.getElementById("crear").classList.add("hidden");
}

function mostrarHome() {
  ocultarTodo();
  document.getElementById("home").classList.remove("hidden");
}

function mostrarConsultar() {
  ocultarTodo();
  document.getElementById("consultar").classList.remove("hidden");
  pintarLibros();
}

function mostrarCrear() {
  ocultarTodo();
  document.getElementById("crear").classList.remove("hidden");
}

// Crear libro
function crearLibro(event) {
  event.preventDefault();

  const titulo = document.getElementById("titulo").value;
  const autor = document.getElementById("autor").value;
  const anio = document.getElementById("anio").value;

  const libro = new Libro(titulo, autor, anio);
  libros.push(libro);

  event.target.reset();
  mostrarConsultar();
}

// Pintar libros
function pintarLibros() {
  const tbody = document.getElementById("tablaLibros");
  tbody.innerHTML = "";

  for (const libro of libros) {
    const fila = document.createElement("tr");
    fila.innerHTML = `
                <td>${libro.titulo}</td>
                <td>${libro.autor}</td>
                <td>${libro.anio}</td>
            `;
    tbody.appendChild(fila);
  }
}
