"use strict";
import {
  DIVISA_EURO,
  DIVISA_DOLAR,
  DIVISA_CAKE,
  DIVISA_LIBRA,
  EURO_TO_DOLLAR,
  LIBRA_TO_DOLLAR,
} from "./constants.js";

function generarMatrizIntercambioDivisas() {
  return [
    [1, EURO_TO_DOLLAR / LIBRA_TO_DOLLAR, EURO_TO_DOLLAR],
    [LIBRA_TO_DOLLAR / EURO_TO_DOLLAR, 1, LIBRA_TO_DOLLAR],
    [1 / EURO_TO_DOLLAR, 1 / LIBRA_TO_DOLLAR, 1],
  ];
}
export function cambioDivisa(divisaFrom, divisaTo, monto) {
  const matrix = generarMatrizIntercambioDivisas();
  switch (divisaFrom) {
    case DIVISA_EURO:
      if (divisaTo === DIVISA_EURO) {
        return monto * matrix[0][0];
      } else if (divisaTo === DIVISA_LIBRA) {
        return monto * matrix[0][1];
      } else if (divisaTo === DIVISA_DOLAR) {
        return monto * matrix[0][2];
      } else {
        return monto * Math.random() * 10;
      }
    case DIVISA_DOLAR:
      break;
    case DIVISA_CAKE:
      break;
    case DIVISA_LIBRA:
      break;
    default:
      alert("Elige una divisa");
  }
}
