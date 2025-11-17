<<<<<<< HEAD
class MySumador {
  constructor() {}
  sumar(num) {
    return 1 + num;
=======
class TaskManager {
  constructor() {
    if (TaskManager.instance === undefined) {
      TaskManager.instance = this;
      this.array = [];
    }
    return this;
  }

  addTask(task) {
    this.array.push(task);
  }
  removeTask(id) {
    filteredArray = [];
    this.array.forEach((x) => {
      if (x.id !== id) {
        filteredArray.push(x);
      }
    });
    this.array = filteredArray;
  }
  show() {
    this.array.forEach((x) => console.log(JSON.stringify(x)));
>>>>>>> fe6765611f9c74ec62f8d0a4daca3df73e44f0b2
  }
  static sumarPro(num) {
    return 2 + num;
  }
  static nombreGod;
  nombre;
}

<<<<<<< HEAD
const newSumador = new MySumador();
newSumador.nombre = "200";
newSumador.nombreGod = "1000";

const otroSumador = new MySumador();
console.log(otroSumador.nombreGod);
=======
const arrayManager = new TaskManager();
export { arrayManager };
>>>>>>> fe6765611f9c74ec62f8d0a4daca3df73e44f0b2
