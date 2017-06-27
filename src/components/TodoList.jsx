import React from 'react'
import Todo from './Todo'

class TodoList extends React.Component {
  handleOnChangeStatusClick (todo) {
    const status = (todo.status === 'Done') ? 'To do' : 'Done'

    this.props.onChangeStatusClick(todo.id, status)
  }

  render () {
    const props = this.props

    return (
      <ul>
        {props.todos.map(todo =>
          <Todo
            todo={todo}
            onDeleteClick={() => { props.onDeleteClick(todo.id) }}
            onEditClick={props.onEditClick}
            onChangeStatusClick={() => { this.handleOnChangeStatusClick(todo) }}
          />
        )}
      </ul>
    )
  }
}

export default TodoList
