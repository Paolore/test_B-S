import React from 'react'


function List(props) {
  return (
    <>
      <h3 className='title'>Seleccione una tarea para activarla</h3>
      {
        props.task.map(row => {
          return <div className='task-container' key={row.id}>
            <input
              id={row.id}
              type="checkbox"
              checked={row.checked === 1}
              onChange={props.handleActiveInputChange}
            />
            <span>{row.name}</span>
            <div className='button-container'>
              <button
                className='delete-button'
                onClick={() => { props.handleDelete(row.id) }}
              >
                X
          </button>
            </div>
          </div>

        })
      }
    </>
  )
}

export default List
