const btnCambiar = document.getElementById("btnCambiar");

btnCambiar.addEventListener("click", function (e) {
  e.preventDefault();
  const importe = parseInt(document.getElementById("importeId"));
  const fromSelection = document.getElementById("fromSelection");
  const toSelection = document.getElementById("fromSelection");
  const fromSelectionValue = fromSelection[fromSelection.selectedIndex];
  const toSelectionValue = toSelection[toSelection.selectedIndex];
});
