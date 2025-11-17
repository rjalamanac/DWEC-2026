class FilterStrategy {
  setStrategy(strategy) {
    this.strategy = strategy;
  }
  filter(array, data) {
    this.strategy.filter(array, data);
  }
}
class FilterTaskByName {
  filter(array, data) {
    return array.filter((x) => x.name === data);
  }
}
class FilterTaskByPriority {
  filter(array, data) {
    return array.filter((x) => x.priority === data);
  }
}

class FilterTaskByDate {
  filter(array, data) {
    return array.filter((x) => x.priority === data);
  }
}

class FilterTaskByNumber {
  filter(array, data) {
    return array.filter((x) => x.priority === data);
  }
}

class FilterTaskById {
  filter(array, data) {
    return array.filter((x) => x.priority === data);
  }
}

const filterArrayTask = new FilterStrategy();
const taskArray = [
  { nombre: "hola", priority: "red" },
  { nombre: "adios", priority: "red" },
  { nombre: "jamon", priority: "blue" },
];

document
  .getElementById("btnFilterName")
  .addEventListener("click", function (event) {
    const nombre = document.getElementById("inputNombre").value;
    filterArrayTask.setStrategy(new FilterTaskByName());
    const filteredArray = filterArrayTask.filter(taskArray, nombre);
    DOMFacade.printArrayTask(filteredArray);
  });

document
  .getElementById("btnFilterPriority")
  .addEventListener("click", function (event) {
    const priority = document.getElementById("inputPriority").value;
    filterArrayTask.setStrategy(new FilterTaskByPriority());
    const filteredArray = filterArrayTask.filter(taskArray, priority);
    DOMFacade.printArrayTask(filteredArray);
  });
