class Tarea {
  constructor({ id, title, description, estado }) {
    this.id = id || 0;
    this.title = title;
    this.description = description;
    this.estado = estado || "pendiente";
  }

  completar() {
    this.estado = "realizada";
  }

  volverAPendiente() {
    this.estado = "pendiente";
  }
}
