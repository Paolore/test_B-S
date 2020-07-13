import React from 'react'

function NewTask(props) {
  return (
    <form onSubmit={props.handleSubmit}>
    <input
      className='new-task'
      value={props.value}
      type="text"
      placeholder='Nombre tarea'
      onChange={props.handleName}
    />
  </form>
  )
}

export default NewTask
