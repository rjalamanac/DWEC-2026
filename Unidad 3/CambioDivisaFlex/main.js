"use strict";
import { cambioDivisa } from "./divisaExchange.js";
import { HISTORIC_KEY } from "./constants.js";
import { HistoricData } from "./Models/historicModel.js";

const btnCambiar = document.getElementById("btnCambiar");
let historicDataArray = [];
loadHistoric();

btnCambiar.addEventListener("click", function (e) {
  e.preventDefault();
  const importe = parseInt(document.getElementById("importeId").value);
  const fromSelection = document.getElementById("fromSelection");
  const toSelection = document.getElementById("toSelection");
  const fromSelectionValue = fromSelection[fromSelection.selectedIndex].value;
  const toSelectionValue = toSelection[toSelection.selectedIndex].value;
  const importeCambiado = cambioDivisa(
    importe,
    fromSelectionValue,
    toSelectionValue
  );
  addToHistoric(
    importe,
    importeCambiado,
    fromSelectionValue,
    toSelectionValue,
    new Date(Date.now())
  );
});

function loadHistoric() {
  const dataHistoricLocalStorage = localStorage.getItem(HISTORIC_KEY);
  if (dataHistoricLocalStorage !== null) {
    historicDataArray = JSON.parse(dataHistoricLocalStorage);
    for (let index = 0; index < historicDataArray.length; index++) {
      addToHistoric(
        historicDataArray[index].importeOrigen,
        historicDataArray[index].importeCambiado,
        historicDataArray[index].divisaFrom,
        historicDataArray[index].divisaTo,
        historicDataArray[index].fecha
      );
    }
  }
}

function saveHistoric(data) {
  historicDataArray.push(data);
  localStorage.setItem(HISTORIC_KEY, JSON.stringify(historicDataArray));
}

function addToHistoric(
  importeOrigen,
  importeCambiado,
  divisaFrom,
  divisaTo,
  fecha
) {
  const para = document.createElement("p");
  const node = document.createTextNode(
    `${fecha.getDate()}/${fecha.getMonth()}/${fecha.getFullYear()} ${fecha.getHours()}/${fecha.getMinutes()} 
    Importe ${importeOrigen} ${divisaFrom} - ${Number.parseFloat(
      importeCambiado
    ).toFixed(2)} ${divisaTo}`
  );
  saveHistoric(
    new HistoricData(
      importeOrigen,
      importeCambiado,
      divisaFrom,
      divisaTo,
      fecha
    )
  );
  para.appendChild(node);
  const element = document.getElementById("idHistorico");
  element.appendChild(para);
}
