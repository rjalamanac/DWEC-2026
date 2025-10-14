/*
Escribe una función que tome un parámetro positivo num y devuelva
su persistencia multiplicativa, que es el número de veces que debes
multiplicar los dígitos de num hasta llegar a un solo dígito
Por ejemplo (Entrada --> Salida):
39 --> 3 (porque 3*9 = 27, 2*7 = 14, 1*4 = 4 y el 4 sólo tiene un dígito)
999 --> 4 (porque 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, y finalmente 1*2 =
2)
4 --> 0 (porque el 4 ya es un número de un dígito)
*/

function persistenciaMultiplicativa(num, contador) {
  const stringNumber = num.toString();
  let resultado = 1;
  for (let index = 0; index < stringNumber.length; index++) {
    resultado = resultado * parseInt(stringNumber[index]);
  }
  contador++;
  if (resultado > 9) {
    persistenciaMultiplicativa(resultado, contador);
  } else {
    console.log(
      `la persistencia es ${resultado} y ha necesito ${
        contador === 1 ? 0 : contador
      } pasos`
    );
    return;
  }
}

persistenciaMultiplicativa(39, 0);
persistenciaMultiplicativa(999, 0);
persistenciaMultiplicativa(4, 0);
