
// Herencia
class Vehiculo {
  constructor(modelo, color, marca) {
    this.modelo = modelo;
    this.color = color;
    this.marca = marca;
    this.encendido = false;
  }

  encender() {
    this.encendido = true;
  }

  apagar() {
    this.encendido = false;
  }
}

class Auto extends Vehiculo {
  constructor(modelo, color, marca) {
    super(modelo, color, marca);
    // la palabrita `super` lo que hace es llamar al constructor del padre, en este caso Vehículo.
    this.ruedas = 4;
  }
}

class Moto extends Vehiculo {
  constructor(modelo, color, marca) {
    super(modelo, color, marca);
    this.ruedas = 2;
  }
}