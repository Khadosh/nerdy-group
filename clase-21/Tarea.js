class Tarea {
  constructor(title, description) {
    this.id = listaDeTareas.length;
    this.title = title;
    this.description = description;
    this.estado = 'pendiente'
  }

  completar() {
    this.estado = 'realizada'
  }

  volverAPendiente() {
    this.estado = 'pendiente'
  }
}