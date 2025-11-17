class MySumador {
  constructor() {}
  sumar(num) {
    return 1 + num;
  }
  static sumarPro(num) {
    return 2 + num;
  }
  static nombreGod;
  nombre;
}

const newSumador = new MySumador();
newSumador.nombre = "200";
newSumador.nombreGod = "1000";

const otroSumador = new MySumador();
console.log(otroSumador.nombreGod);
