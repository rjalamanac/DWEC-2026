const arrayTrenes = [
  { nombre: "rafa", velocidad: 30, tipo: "Vapor" },
  { nombre: "Jorge", velocidad: 12, tipo: "Vapor" },
  { nombre: "Paco", velocidad: 100, tipo: "Electrico" },
  { nombre: "Felix", velocidad: 77, tipo: "Diesel" },
];

function addTrenListTrenes(arrayTrenes) {
  const sectionTrenes = document.getElementById("idListTrenes");
  for (const element of arrayTrenes) {
    const article = document.createElement("article");
    article.classList.add("classArticle");
    article.innerHTML = `<p> Nombre: ${element.nombre}</p> <p>Velocidad: ${element.velocidad}</p> <p>Tipo: ${element.tipo}</p> `;
    sectionTrenes.appendChild(article);
  }
}
const inputBuscador = document.getElementById("idBuscador");

inputBuscador.addEventListener("keyup", function (event) {
  const arrayFilteredTrenes = [];
  for (const element of arrayTrenes) {
    if (
      element.nombre
        .toLowerCase()
        .includes(inputBuscador.value.toLowerCase()) ||
      element.tipo.toLowerCase().includes(inputBuscador.value.toLowerCase())
    ) {
      arrayFilteredTrenes.push(element);
    }
  }
  document.getElementById("idListTrenes").innerHTML = "";
  addTrenListTrenes(arrayFilteredTrenes);
});
addTrenListTrenes(arrayTrenes);
