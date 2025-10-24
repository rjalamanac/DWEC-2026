<<<<<<< HEAD
"use strict";
/*
Dos cadenas se consideran cercanas si se puede obtener una a partir de la otra mediante las siguientes operaciones:

Operación 1: Intercambiar dos caracteres existentes.
Por ejemplo, abcde -> aecdb. (swap entre a y b)
Operación 2: Transformar cada aparición de un carácter existente en otro carácter existente y hacer lo mismo con el otro carácter.

Por ejemplo, aacabb -> bbcbaa (todas las a se convierten en b y todas las b se convierten en a).
Puedes utilizar las operaciones en cualquiera de las cadenas tantas veces como sea necesario.
Dadas dos cadenas, palabra1 y palabra2, devuelve verdadero si palabra1 y palabra2 son cercanas y falso en caso contrario.
*/

function sonCercanas(cadaOrigen, cadenaFin) {
  if (cadaOrigen.length !== cadenaFin.length) {
    return false;
  }

  let arrayCadenaOrigen = cadaOrigen.split("");
  let arrayCadenaFin = cadenaFin.split("");

  let setCadenaOrigen = new Set(arrayCadenaOrigen.sort());
  let setCadenaFin = new Set(arrayCadenaFin.sort());

  let stringDistinctOrigen = Array.from(setCadenaOrigen).join("");
  let stringDistinctFin = Array.from(setCadenaFin).join("");

  if (stringDistinctOrigen !== stringDistinctFin) {
    return false;
  }

  console.log("Son cercanas");
}

sonCercanas("aaaaaabc", "aabbcccc");
=======
/*
Dos cadenas se consideran cercanas si se puede obtener una a partir de la
otra mediante las siguientes operaciones:

Operación 1: Intercambiar dos caracteres existentes.
Por ejemplo, abcde -> aecdb. (swap entre a y b)
Operación 2: Transformar cada aparición de un carácter existente en otro
carácter existente y hacer lo mismo con el otro carácter.

Por ejemplo, aacabb -> bbcbaa (todas las a se convierten en b y todas las b
se convierten en a).

Puedes utilizar las operaciones en cualquiera de las cadenas tantas veces
como sea necesario.

Dadas dos cadenas, palabra1 y palabra2, devuelve verdadero si palabra1 y
palabra2 son cercanas y falso en caso contrario.
*/
"use strict";

function isCercana(cadenaOrigen, cadenaResultado) {
  if (cadenaOrigen.length !== cadenaResultado.length) {
    return false;
  }
  const arrayCadenaOrigen = cadenaOrigen.split("");
  const arrayCadenaResultado = cadenaResultado.split("");
  const mapaLetrasOrigen = GenerarMapaFromArrayLetras(arrayCadenaOrigen);
  const mapaLetrasResultado = GenerarMapaFromArrayLetras(arrayCadenaResultado);
}

function GenerarMapaFromArrayLetras(array) {
  const mapaLetras = new Map();
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (mapaLetras.has(element)) {
      mapaLetras.set(element, mapaLetras.get(element) + 1);
    } else {
      mapaLetras.set(element, 1);
    }
  }
  return mapaLetras;
}

console.log(isCercana("cabbba", "abbccc"));
>>>>>>> d053e8c130c91572290ceffeb7c53de32e1152bc
