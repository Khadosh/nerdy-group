const getlista = () => {
  const tareasFromStorage = localStorage.getItem('listaDeTareas')
  const tareasFromStorageToObject = JSON.parse(tareasFromStorage);
  const taskList = tareasFromStorageToObject || [];
  return taskList.map(task => new Tarea(task));
}

class ListaDeTareas {
  constructor() {
    this.value = getlista()
  }

  updateStorage() {
    localStorage.setItem('listaDeTareas', JSON.stringify(this.value))
  }

  addTask(task) {
    this.value.push(task)
    this.updateStorage()
  }
}