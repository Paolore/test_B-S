const editTask = async (id) => {
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

export default editTask
