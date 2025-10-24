/*
El teorema de los cuatro cuadrados de Lagrange, también conocido
como conjetura de Bachet, afirma que todo número natural puede
representarse como la suma de cuatro cuadrados enteros.

Haz una función que devuelva un array con los cuatro números naturales
que cumplan el teorema dado un número natural pasado como argumento.
121=11^2 + 0^2 + 0^2+ 0^2
*/

numero = 124;

for (let index = 0; index * index <= numero; index++) {
  if (numero == index * index) {
    console.log(`${index} al cuadrado es  ${numero}`);
    return;
  }
  if ((index + 1) * (index + 1) > numero) {
    numeroSegundoSumandoConseguir = numero - index * index;
    for (
      let indexSegundo = 0;
      indexSegundo * indexSegundo <= numeroSegundoSumandoConseguir;
      indexSegundo++
    ) {
      if (numeroSegundoSumandoConseguir == indexSegundo * indexSegundo) {
        console.log(
          `${numero} es ${index} al cuadrado + ${indexSegundo} al cuadrado `
        );
        return;
      }
    }
  }
}

n ^ 2;
