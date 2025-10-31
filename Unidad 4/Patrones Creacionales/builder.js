class PizzaBuilder {
  constructor() {
    this.pizza = {};
  }
  addCheese() {
    this.pizza.cheese = true;
    return this;
  }
  addPepperoni() {
    this.pizza.pepperoni = true;
    return this;
  }
  build() {
    return this.pizza;
  }
}

const pizza = new PizzaBuilder().addCheese().addPepperoni().build();
console.log(pizza);
