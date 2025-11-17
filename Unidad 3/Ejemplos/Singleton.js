class GestorTareas {
  constructor() {
    if (GestorTareas.instance) return GestorTareas.instance;
    GestorTareas.instance = this;
  }
  addTarea(tarea) {}
  elimiarTarea(tarea) {}
  completarTarea(tarea) {}
}
