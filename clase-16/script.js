const taskList = [];
let taskListCompleted = [];

const form = document.querySelector('#task-form');
const taskListDOM = document.querySelector('#task-list');

// Add event listener, tiene 2 params
// Primero es el nombre del evento
// El 2do es una function que nos permite acceder al evento

form.addEventListener('submit', function(evt) {
  // Objetivo 1: Evitar que refresque la página en el submit
  evt.preventDefault();
  
  // Objetivo 2: Capturar el valor del input
  const value = this.task.value;
  
  // Objetivo 3: Agregar esta tarea a una lista de tareas
  taskList.push(value);
  
  // Objetivo 4: Dibujar la lista de tareas
  renderTaskList();
  
  // Objetivo 5: Limpiar el formulario para escribir una nueva task
  this.reset();
});

function renderTaskList() {
  let innerHTML = '';
  for(let i = 0; i < taskList.length; i ++) {
    let className = '';
    if (taskListCompleted.includes(i)) {
      className='completed';
    }

    innerHTML += `<li onClick="completeTask(${i})" class="${className}">${taskList[i]}</li>`
  }
  
  taskListDOM.innerHTML = innerHTML;
}


function completeTask(taskId) {
  
  // 1. Agregar la tarea a la lista de completadas
  if(!taskListCompleted.includes(taskId)) {
    taskListCompleted.push(taskId);
  } else {
    // FILTRAR ELEMENTOS DE UN ARRAY
    taskListCompleted = taskListCompleted.filter(function(task) {
      return task !== taskId;
    });
  }

  // 2. Redibujar la lista de tareas con la nueva tarea tachada
  renderTaskList()
}


// Relación de conceptos
// 1. Al hacer Click se tacha una tarea
// 2. agregar la tarea a la lista de completadas
// 3. redibujar agregand la clase 'completed' sólo a aquellas tareas completadas



// COMO FUNCIONA FILTER
// FILTER NOS PERMITE USAR UNA FUNCION QUE TIENE EL ELEMENTO ACTUAL DEL ARRAY COMO PARAMETRO
// ESPERA TENER UN RETURN
// ESE RETURN PUEDE SER O VERDADERO O FALSO
// SI ES VERDADERO LO AGREGA A UN NUEVO ARRAY
// SI ES FALSO NO LO AGREGA

