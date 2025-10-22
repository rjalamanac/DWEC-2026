import { cambioDivisa } from "./cambioDivisa.js";

const btnSubmit = document.getElementsByClassName("inputSubmit")[0];

btnSubmit.addEventListener("click", (event) => {
  event.preventDefault();
  const element = document.getElementsByTagName("input")[0];
  let valorNumerico = parseInt(element.value);

  const divisaFrom = document.getElementById("inputDivisaFrom");
  const divisaTo = document.getElementById("inputDivisaTo");

  const divisaValueFrom = divisaFrom[divisaFrom.selectedIndex].value;
  const divisaValueTo = divisaTo[divisaTo.selectedIndex].value;
  let cambio = cambioDivisa(divisaValueFrom, divisaValueTo, valorNumerico);
  addHistoricExchange(
    valorNumerico,
    cambio,
    divisaValueFrom,
    divisaValueTo,
    new Date(Date.now())
  );
});

function addHistoricExchange(
  valueOrigin,
  valueExchanged,
  divisaFrom,
  divisaTo,
  fechaActual
) {
  const sectionHistorico = document.getElementById("historicSection");
  const nuevaLineaHistorico = document.createElement("p");
  const valorNumericoExchanged = valueExchanged.toString().slice(0, 5);
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
