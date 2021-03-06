import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from './todoActions'

let AddTodo = ({ dispatch }) => {
  let input

  return (
    <div>
      <p>Add to the list</p>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addTodo(input.value))
          input.value = ''
        }}
      >
        <input
          ref={node => {
            input = node
          }}
        />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo