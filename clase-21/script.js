const listaDeTareas = [];

const formTarea = document.querySelector("#form-tarea");
const pendientes = document.querySelector("#pendientes");
const realizadas = document.querySelector("#realizadas");
const manejadorListas = document.querySelector("#manejador-listas");

formTarea.addEventListener('submit', evt => {
  evt.preventDefault();
  const form = evt.target;
  const title = form.title.value;
  const description = form.description.value;

  const tarea = new Tarea(title, description);
  listaDeTareas.push(tarea);

  dibujarListas();
  form.reset();
});

const dibujarListas = () => {
  let listaPendientes = '';
  let listaRealizadas = '';

  listaDeTareas.forEach(tarea => {
    if (tarea.estado === 'pendiente') {
      listaPendientes += dibujarElemento(tarea);
    } else {
      listaRealizadas += dibujarElemento(tarea);
    }
  })

  pendientes.innerHTML = listaPendientes;
  realizadas.innerHTML = listaRealizadas;
}

const dibujarElemento = tarea => `<li data-id=${tarea.id}>${tarea.title}: ${tarea.description}</li>`

manejadorListas.addEventListener('click', evt => {
  if (evt.target.tagName != 'LI') return;
  
  const data = evt.target.dataset;
  
  const idTarea = data.id;
  const tarea = listaDeTareas.find(tarea => tarea.id == idTarea);

  tarea.estado === 'pendiente' ? tarea.completar() : tarea.volverAPendiente();
  dibujarListas();
})