let dbTask = [
  { 'id': 1, 'name': 'tarea 1', 'checked': 1 },
  { 'id': 2, 'name': 'tarea 2', 'checked': 0 },
  { 'id': 3, 'name': 'Hola yo como estas', 'checked': 1 }
]

const listTask = () => {
  return dbTask
}

const createTask = (task) => {
  dbTask.push(task)
}

const editTask = (taskId, checked) => {
  for(let i = 0; i < dbTask.length; i++){
    if(dbTask[i].id == taskId){
      dbTask[i].checked = checked
      return
    }
  }
}

const deleteTask = (taskId) => {
  dbTask = dbTask.filter(task => task.id != taskId)
}

module.exports = {
  listTask,
  createTask,
  editTask,
  deleteTask
}