import React, { useState, useEffect } from 'react';

import Layout from './components/layout'
import Text from './components/text'
import Task from './components/tasks'
import NewTask from './components/new-task'
import ListTasks from './services/getTasksList'
import NewTasks from './services/newTask'
import editTasks from './services/editTask'
import deleteTasks from './services/deleteTask'
import './App.css';


function App() {
  const [task, setTasks] = useState([])
  const [newTask, setNewTask] = useState('')

  const handleName = (e) => {
    setNewTask(e.target.value)
  }

  useEffect(() => {
    ListTasks().then(list => setTasks(list)
    )
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    const newLine = { 'id': +new Date(), 'name': newTask, 'checked': 0 }
    NewTasks(newLine).then(tasks => setTasks(tasks))
    setNewTask('')
  }

  const handleActiveInputChange = (e) => {
    const id = +e.target.id
    const checked = +e.target.checked
    const newLine = { 'checked': checked }
    editTasks(id, newLine).then(tasks => setTasks(tasks))
  }

  const handleDelete = (id) => {
    deleteTasks(id).then(tasks => setTasks(tasks))
  }


  return (
    <Layout>
      <Text title='Lista de tareas' />
      <NewTask
        handleSubmit={handleSubmit}
        handleName={handleName}
      />
      <Task
        task={task}
        handleActiveInputChange={handleActiveInputChange}
        handleDelete={handleDelete}
      />
    </Layout >
  );
}

export default App;
