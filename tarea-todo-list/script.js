class Task {
  constructor(title) {
    this.title = title;
    this.state = 'created'
  }

  setState(newState) {
    state = newState;
  }
}

const taskList = [];

function addTask() {
  const task = document.querySelector('#task').value;
  const newTask = new Task(task);
  taskList.push(newTask);
  showTaskList();
}

function showTaskList() {
  const target = document.querySelector('#task-list');
  let childrens = '';
  for(let i = 0; i < taskList.length; i ++) {
    const task = taskList[i];
    childrens += `<li class="${task.state}">${task.title}</li>`
  }
  target.innerHTML = childrens;
}
