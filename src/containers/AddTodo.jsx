import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

let AddTodo = class AddTodo extends React.Component {
  getRandomId () {
    const max = 9999
    const min = 1

    return Date.now() + (Math.random() * (max - min) + min)
  }

  render () {
    let input

    return (
      <form onSubmit={event => {
        event.preventDefault()

        this.props.dispatch(addTodo({ id: this.getRandomId(), title: input.value }))
        input.value = ''
      }}>
        <label>todo:
          <input type='text' ref={node => {
            input = node
          }} />
        </label>
        <input type='submit' value='Submit' />
      </form>
    )
  }
}

AddTodo = connect()(AddTodo)

export default AddTodo
