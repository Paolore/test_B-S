import React, { useState, useEffect } from 'react';
import './App.css';


function App() {
  const [task, setTasks] = useState([])
  const [newTask, setNewTask] = useState('')

  useEffect(async () => {
    const response = await window.fetch(
      `http://localhost:5000/task`, {
      method: 'GET'
    })
    const res = await response.json()
    setTasks(res)
  }, [])

  const handleInputChange = async (e) => {
    const id = +e.target.id
    const checked = +e.target.checked
    const newLine = { 'checked': checked }
    const response = await window.fetch(
      `http://localhost:5000/task/${id}`, {
      method: 'PATCH',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newLine)
    })
    const res = await response.json()
    setTasks(res)
  }

  const handleName = (e) => {
    setNewTask(e.target.value)
  }

  const submit = async (e) => {
    e.preventDefault()
    const newLine = { 'id': +new Date(), 'name': newTask, 'checked': 0 }
    const response = await window.fetch(
      `http://localhost:5000/task`, {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newLine)
    })
    const res = await response.json()
    setTasks(res)
    setNewTask('')
  }

  return (
    <div className="App">
      <h1>Lista de tareas</h1>

      <div>
        {
          task.map(row => {
            return <div key={row.id}>
              <input
                id={row.id}
                type="checkbox"
                checked={row.checked === 1}
                onChange={handleInputChange}
              />
              <span>{row.name}</span>
            </div>
          })
        }
      </div>
      <div>
        <h4>Crear tarea</h4>
        <input
          value={newTask}
          type="text"
          placeholder='Nombre tarea'
          onChange={handleName}
        />
        <button onClick={submit}>
          Guardar
      </button>
      </div>
    </div>
  );
}

export default App;
