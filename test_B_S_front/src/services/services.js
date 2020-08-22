export const getTasksList = async () => {
  const response = await window.fetch(
    `http://localhost:5000/task`, {
    method: 'GET'
  })
  const listTasks = await response.json()
  return (listTasks)
}

export const newTask = async (task) => {
  const response = await window.fetch(
    `http://localhost:5000/task`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(task)
  })
  const tasks = await response.json()
  return tasks
}

export const editTask = async (id, task) => {
  const response = await window.fetch(
    `http://localhost:5000/task/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(task)
  })
  const tasks = await response.json()
  task.checked === 0 ? window.alert('Tarea desactivada') : window.alert('Tarea activada')
  return tasks
}

export const deleteTask = async (id) => {
  const response = await window.fetch(
    `http://localhost:5000/task/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const tasks = await response.json()
  return tasks
}
