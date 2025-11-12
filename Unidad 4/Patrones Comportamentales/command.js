"use strict";
function add(x, y) {
  return x + y;
}
function sub(x, y) {
  return x - y;
}
function mul(x, y) {
  return x * y;
}
function div(x, y) {
  return x / y;
}

let Command = function (execute, value) {
  this.execute = execute;
  this.value = value;
};

let AddCommand = function (value) {
  return new Command(add, value);
};

let SubCommand = function (value) {
  return new Command(sub, value);
};

let MulCommand = function (value) {
  return new Command(mul, value);
};

let DivCommand = function (value) {
  return new Command(div, value);
};

let Calculator = function () {
  let current = 0;

  function action(command) {
    let name = command.execute.toString().substr(9, 3);
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

  return {
    execute: function (command) {
      current = command.execute(current, command.value);
      console.log(action(command) + ": " + command.value);
    },

    getCurrentValue: function () {
      return current;
    },
  };
};

function run() {
  let calculator = new Calculator();
  calculator.execute(new AddCommand(100));
  calculator.execute(new SubCommand(24));
  calculator.execute(new MulCommand(6));
  calculator.execute(new DivCommand(2));

  console.log("\nValue: " + calculator.getCurrentValue());
}

run();
