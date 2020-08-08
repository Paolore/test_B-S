const getTasksList = async () => {
  const response = await window.fetch(
    `http://localhost:5000/task`, {
    method: 'GET'
  })
  const listTasks = await response.json()
  return (listTasks)
}

export default getTasksList
