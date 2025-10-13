/*
4. Dada un array de enteros, encuentra todo los números que aparecen
un número impar de veces.
*/

const entrada = [1, 2, 3, 4, 5, 6, 7, 7, 1, 5];

resultado = [2, 3, 4, 6];
const mapa = new Map();

for (let index = 0; index < entrada.length; index++) {
  if (mapa.get(entrada[index]) === undefined) {
    mapa.set(entrada[index], 1);
  } else {
    mapa.set(entrada[index], mapa.get(entrada[index]) + 1);
  }
}

for (const [key, value] of mapa) {
  if (value % 2 !== 0) {
    console.log(`El valor ${key} se repite ${value} veces`);
  }
}
