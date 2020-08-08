const editTask = async (id, task) => {
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

export default editTask
