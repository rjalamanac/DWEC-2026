import { Libro } from "./libro.js";
import { API_URL } from "./constants.js";

// Navegación
document.getElementById("logo").addEventListener("click", mostrarHome);
document.getElementById("btnHome").addEventListener("click", mostrarHome);
document
  .getElementById("btnConsultar")
  .addEventListener("click", mostrarConsultar);
document.getElementById("btnCrear").addEventListener("click", mostrarCrear);

document.getElementById("formCrear").addEventListener("submit", crearLibro);

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
async function crearLibro(event) {
  event.preventDefault();

  const titulo = document.getElementById("titulo").value;
  const autor = document.getElementById("autor").value;
  const anio = document.getElementById("anio").value;

  const libro = new Libro(titulo, autor, anio);
  await PostLibro(libro);
  event.target.reset();
  mostrarConsultar();
}

async function PostLibro(libro) {
  let myHeaders = new Headers({
    "Content-Type": "application/json",
  });
  const requestLibros = new Request(`${API_URL}libros`, {
    method: "POST",
    body: JSON.stringify(libro),
    headers: myHeaders,
  });
  const requestPostLibros = await fetch(requestLibros);
  const dataCreatedBook = await requestPostLibros.json();
  return dataCreatedBook;
}

// Pintar libros
async function pintarLibros() {
  const tbody = document.getElementById("tablaLibros");
  tbody.innerHTML = "";

  const requestLibros = await fetch(API_URL + "libros");
  const libros = await requestLibros.json();
  for (const libro of libros) {
    const fila = document.createElement("tr");
    fila.innerHTML = `
                <td>${libro.titulo}</td>
                <td>${libro.autor}</td>
                <td>${libro.anio}</td>
                <td><button value="${libro.id}">X</button></td>
            `;
    tbody.appendChild(fila);
    for (const button of document.getElementsByTagName("button")) {
      button.addEventListener("click", deleteBook);
    }
  }
}

async function deleteBook(event) {
  const requestLibros = new Request(`${API_URL}libros/${event.target.value}`, {
    method: "DELETE",
  });
  const requestPostLibros = await fetch(requestLibros);
  const dataCreatedBook = await requestPostLibros.text();
  return dataCreatedBook;
}
