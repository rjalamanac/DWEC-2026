"use strict";
import {
  EUROS_TO_DOLLARS,
  LIBRA_TO_DOLLARS,
  DIVISA_EURO,
  DIVISA_LIBRA,
  DIVISA_DOLLAR,
} from "./constants.js";

function getMatrizCambios() {
  return [
    [1, EUROS_TO_DOLLARS / LIBRA_TO_DOLLARS, EUROS_TO_DOLLARS],
    [LIBRA_TO_DOLLARS / EUROS_TO_DOLLARS, 1, LIBRA_TO_DOLLARS],
    [1 / EUROS_TO_DOLLARS, 1 / LIBRA_TO_DOLLARS, 1],
  ];
}

export function cambioDivisa(importe, divisaFrom, divisaTo) {
  const matrizCambios = getMatrizCambios();
  if (divisaTo === divisaFrom) return importe;
  switch (divisaFrom) {
    case DIVISA_EURO:
      return (
        importe *
        (divisaTo === DIVISA_LIBRA ? matrizCambios[0][1] : matrizCambios[0][2])
      );

    case DIVISA_LIBRA:
      return (
        importe *
        (divisaTo === DIVISA_EURO ? matrizCambios[1][0] : matrizCambios[1][2])
      );

    case DIVISA_DOLLAR:
      return (
        importe *
        (divisaTo === DIVISA_EURO ? matrizCambios[2][0] : matrizCambios[2][1])
      );
    default:
      return 0;
  }
}
