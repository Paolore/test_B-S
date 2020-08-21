const newTask = async (task) => {
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

export default newTask
