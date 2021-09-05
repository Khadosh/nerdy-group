const taskList = [];
let taskListCompleted = [];

const form = document.querySelector('#task-form');
const taskListDOM = document.querySelector('#task-list');

form.addEventListener('submit', function(evt) {
  evt.preventDefault();
  
  const value = this.task.value;
  taskList.push(value);
  renderTaskList();
  this.reset();
});

function renderTaskList() {
  let innerHTML = '';
  for(let i = 0; i < taskList.length; i ++) {
    let className = '';
    if (taskListCompleted.includes(i)) {
      className='completed';
    }

    innerHTML += `<li data-target=${i} class="${className}">${taskList[i]}</li>`
  }
  
  taskListDOM.innerHTML = innerHTML;
}

taskListDOM.addEventListener('click', function(evt) {
  const li = evt.target;
  const value = li.dataset.target;

  const isCompleted = taskListCompleted.includes(value);
  
  // si estaba completada la tarea, la quito... sino la agrego
  if(isCompleted) {
    taskListCompleted = taskListCompleted.filter(function(el) {
      return el !== value
    });
  } else {
    taskListCompleted.push(value);
  }

  li.className = isCompleted ? '' : 'completed';
})