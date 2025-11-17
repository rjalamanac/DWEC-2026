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
  removePepperoni() {
    this.pizza.pepperoni = false;
    return this;
  }
  build() {
    return this.pizza;
  }
}

const pizzaBuilder = new PizzaBuilder();

//button Queso
document.addEventListener("click", function () {
  pizzaBuilder = pizzaBuilder.addCheese();
});

//button pepperoni
document.addEventListener("click", function () {
  pizzaBuilder = pizzaBuilder.addPepperoni();
});

//button submit
document.addEventListener("click", function () {
  const pizza = pizzaBuilder.build();
  //peticion post API (pizza)
});
