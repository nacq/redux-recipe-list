import { connect } from 'react-redux'
import { deleteTodo, editTodo, changeStatus } from '../actions'
import TodoList from '../components/TodoList'

const mapStateToPros = (state) => {
  console.info('THIS IS THE STATE', state)

  return {
    todos: state.todos
  }
}

const mapDispatchToProps = {
  onDeleteClick: deleteTodo,
  onEditClick: editTodo,
  onChangeStatusClick: changeStatus
}

const TodosContainer = connect(
  mapStateToPros,
  mapDispatchToProps
)(TodoList)

export default TodosContainer
