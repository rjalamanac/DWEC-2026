import { cambioDivisa } from "./cambioDivisa.js";
import { HISTORIC_KEY } from "./constants.js";
import { Historico } from "./Model/historicModel.js";

let arrayHistorico = [];
loadHistoric();

const btnSubmit = document.getElementsByClassName("inputSubmit")[0];

btnSubmit.addEventListener("click", (event) => {
  event.preventDefault();
  const element = document.getElementsByTagName("input")[0];
  let valorNumerico = parseInt(element.value);

  const divisaFrom = document.getElementById("inputDivisaFrom");
  const divisaTo = document.getElementById("inputDivisaTo");

  const divisaValueFrom = divisaFrom[divisaFrom.selectedIndex].value;
  const divisaValueTo = divisaTo[divisaTo.selectedIndex].value;
  let valorCambio = cambioDivisa(divisaValueFrom, divisaValueTo, valorNumerico);
  const fecha = new Date(Date.now());
  addHistoricExchange(
    valorNumerico,
    valorCambio,
    divisaValueFrom,
    divisaValueTo,
    fecha
  );
  addLineHistoricToLocalStorage(
    new Historico(
      valorNumerico,
      valorCambio,
      divisaValueFrom,
      divisaValueTo,
      fecha
    )
  );
});

function addLineHistoricToLocalStorage(objHistorico) {
  arrayHistorico.push(objHistorico);
  localStorage.setItem(HISTORIC_KEY, JSON.stringify(arrayHistorico));
}

function loadHistoric() {
  let stringHistoric = localStorage.getItem(HISTORIC_KEY);
  if (stringHistoric !== null) {
    arrayHistorico = JSON.parse(stringHistoric);
    for (let index = 0; index < arrayHistorico.length; index++) {
      const element = arrayHistorico[index];
      addHistoricExchange(
        element.valueOrigin,
        element.valueExchange,
        element.divisaFrom,
        element.divisaTo,
        new Date(Date.parse(element.fechaActual))
      );
    }
  }
}
function addHistoricExchange(
  valueOrigin,
  valueExchanged,
  divisaFrom,
  divisaTo,
  fechaActual
) {
  const sectionHistorico = document.getElementById("historicSection");
  const nuevaLineaHistorico = document.createElement("p");
  const valorNumericoExchanged = Number.parseFloat(valueExchanged).toFixed(2);
  const textHistoricoNuevaLinea = document.createTextNode(
    `${fechaActual.getDate()}/${fechaActual.getMonth()}/${fechaActual.getFullYear()} 
    ${fechaActual.getHours()}:${fechaActual.getMinutes()} 
    Importe ${valueOrigin} ${divisaFrom} - ${valorNumericoExchanged} ${divisaTo}`
  );
  nuevaLineaHistorico.appendChild(textHistoricoNuevaLinea);
  sectionHistorico.appendChild(nuevaLineaHistorico);
}

document.getElementById("imagenArrow").addEventListener("click", (event) => {
  const divisaFrom = document.getElementById("inputDivisaFrom");
  const divisaTo = document.getElementById("inputDivisaTo");
  const auxiliarSelectedIndexTo = divisaTo.selectedIndex;
  divisaTo.selectedIndex = divisaFrom.selectedIndex;
  divisaFrom.selectedIndex = auxiliarSelectedIndexTo;
});
