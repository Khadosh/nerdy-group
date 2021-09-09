let tareasPendientes = [];
let tareasRealizadas = [];

const form = document.querySelector("#formulario");
const listas = document.querySelector("#listas");
const pendientes = document.querySelector("#pendientes");
const realizadas = document.querySelector("#realizadas");

form.addEventListener("submit", function (evt) {
  evt.preventDefault();
  const value = this.tarea.value;

  agregarTarea(value);
});

const agregarTarea = (tarea) => {
  if (!tarea) return;

  tareasPendientes.push(tarea);
  dibujarListas();
};

listas.addEventListener("click", (evt) => {
  if (evt.target.tagName != 'LI') return;

  const li = evt.path[0];

  const idx = li.dataset.target; // Elemento que yo quiero quitar de Pendientes
  const value = li.innerHTML; // Valor que quiero agregar a Realizadas

  const lista = evt.path[1].id; // La lista que contiene actualmente a ese elemento

  if (lista === "pendientes") {
    tareasPendientes = tareasPendientes.filter((_, idxTarea) => idxTarea != idx);
    tareasRealizadas.push(value);
  } else {
    tareasRealizadas = tareasRealizadas.filter((_, idxTarea) => idxTarea != idx);
    tareasPendientes.push(value);
  }

  dibujarListas();
});

const dibujarListas = () => {
  let html = '';

  // Dibujo la lista de tareas pendientes
  tareasPendientes.forEach((tarea, idx) => {
    html += `<li data-target=${idx}>${tarea}</idx>`;
  });
  
  pendientes.innerHTML = html;


  // Dibujo la lista de tareas realizadas
  html = '';
  tareasRealizadas.forEach((tarea, idx) => {
    html += `<li data-target=${idx}>${tarea}</idx>`;
  });
  realizadas.innerHTML = html;
};
