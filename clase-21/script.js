const formTarea = document.querySelector("#form-tarea");
const pendientes = document.querySelector("#pendientes");
const realizadas = document.querySelector("#realizadas");
const manejadorListas = document.querySelector("#manejador-listas");

const listaDeTareas = new ListaDeTareas();

formTarea.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const form = evt.target;
  const title = form.title.value;
  const description = form.description.value;

  const tarea = new Tarea({
    id: listaDeTareas.value.length,
    title,
    description,
  });
  listaDeTareas.addTask(tarea);

  dibujarListas();
  form.reset();
});

const dibujarListas = () => {
  let listaPendientes = "";
  let listaRealizadas = "";

  listaDeTareas.value.forEach((tarea) => {
    if (tarea.estado === "pendiente") {
      listaPendientes += dibujarElemento(tarea);
    } else {
      listaRealizadas += dibujarElemento(tarea);
    }
  });

  pendientes.innerHTML = listaPendientes;
  realizadas.innerHTML = listaRealizadas;
};

const dibujarElemento = (tarea) =>
  `<li data-id=${tarea.id}>${tarea.title}: ${tarea.description}</li>`;

manejadorListas.addEventListener("click", (evt) => {
  if (evt.target.tagName != "LI") return;

  const data = evt.target.dataset;

  const idTarea = data.id;
  const tarea = listaDeTareas.value.find((tarea) => tarea.id == idTarea);

  tarea.estado === "pendiente" ? tarea.completar() : tarea.volverAPendiente();

  listaDeTareas.updateStorage();
  dibujarListas();
});

dibujarListas();

const sortableOptions = {
  animation: 150,
  group: "tareas",
  sort: false,
  onEnd: (evt) => {
    const target = evt.to.id;
    const idTarea = evt.item.dataset.id;
    const tarea = listaDeTareas.value.find((tarea) => tarea.id == idTarea);
  
    target === "realizadas" ? tarea.completar() : tarea.volverAPendiente();

    listaDeTareas.updateStorage();
  },
};




Sortable.create(pendientes, sortableOptions);
Sortable.create(realizadas, sortableOptions);
