const carPrototype = {
  drive() {
    console.log(`${this.model} driving...`);
  },
};
function createCar(model) {
  const car = Object.create(carPrototype);
  car.model = model;
  return car;
}
const car1 = createCar("Tesla");
car1.drive();
