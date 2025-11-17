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
  }
}

const arrayManager = new TaskManager();
export { arrayManager };
