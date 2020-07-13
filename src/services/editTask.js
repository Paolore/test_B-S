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
  return tasks
}

export default editTask
