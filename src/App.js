import React, { useState } from 'react';
import './App.css';

const tasks = [
  { 'id': 1, 'name': 'tarea 1', 'checked': 1 },
  { 'id': 2, 'name': 'tarea 2', 'checked': 0 },
  { 'id': 3, 'name': 'Hola yo como estas', 'checked': 1 }
]

function App() {
  const [task, setTasks] = useState(tasks)
  const [newTask, setNewTask] = useState('')

  const handleInputChange = (e) => {
    const id = +e.target.id
    const checked = e.target.checked
    for (let i = 0; i < task.length; i++) {
      if (task[i].id === id) {
        task[i].checked = +checked
        setTasks([...task])
      }
    }
  }

  const handleName = (e) => {
    setNewTask(e.target.value)
  }

  const submit = (e) => {
    e.preventDefault()
    const newLine = { 'id': +new Date(), 'name': newTask, 'checked': 0 }
    setTasks([...task, newLine])
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
