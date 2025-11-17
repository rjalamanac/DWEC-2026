document
  .getElementById("idSubmitAddTrenes")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const formAddTrenes = document.getElementById("idAddTrenesForm");
    const tren = {};
    tren.nombre = formAddTrenes[0].value;
    tren.velocidad = formAddTrenes[1].value;
    tren.tipo = formAddTrenes[2].value;
    addOptionsToTrenesSelectorTor([tren]);
  });

function addOptionsToTrenesSelectorTor(trenes) {
  const selectTrenes = document.getElementById("idSelectTrenes");
  for (const element of trenes) {
    const optionTrenes = document.createElement("option");
    optionTrenes.value = element.nombre;
    optionTrenes.textContent = element.nombre;
    selectTrenes.appendChild(optionTrenes);
  }
}

addOptionsToTrenesSelectorTor(
  JSON.parse(localStorage.getItem("trenes") || "[]")
);
