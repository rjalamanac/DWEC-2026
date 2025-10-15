function calcularFactorial(numero) {
  let resultado = 1;
  for (let index = 1; index <= numero; index++) {
    resultado *= index;
  }
  return resultado;
}

const button = document.getElementById("submitButton");
button.value = "Calculando";
button.addEventListener("click", function (e) {
  const inputNumPositivo = document.getElementById("numPositivo");
  const resultado = calcularFactorial(inputNumPositivo.valueAsNumber);
  alert(`El factorial de ${inputNumPositivo.value} es ${resultado}`);
  e.preventDefault();
});
