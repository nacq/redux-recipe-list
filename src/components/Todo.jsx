import React from 'react'

class Todo extends React.Component {
  getLinkText () {
    return (this.props.todo.status === 'Done') ? 'Not done' : 'Done'
  }

  render () {
    console.log(this.props, this.state)
    const props = this.props

    return (
      <li style={{listStyleType: 'none'}}>
        <div>
          <h3>{props.todo.title}</h3>
          <p>Status: {props.todo.status}</p>
          <div>
            <ul style={{listStyleTyle: 'none'}}>
              <li style={{display: 'inline', margin: '5px'}}><a href='#' onClick={(e) => props.onDeleteClick()}>Delete</a></li>
              <li style={{display: 'inline', margin: '5px'}}><a href='#' onClick={(e) => props.onEditClick()}>Edit</a></li>
              <li style={{display: 'inline', margin: '5px'}}><a href='#' onClick={(e) => props.onChangeStatusClick()}>{this.getLinkText()}</a></li>
            </ul>
          </div>
        </div>
      </li>
    )
  }
}

export default Todo
