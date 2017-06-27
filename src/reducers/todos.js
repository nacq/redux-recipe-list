const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.todo.id,
          title: action.todo.title,
          status: 'To do',
          createdAt: new Date(),
          updatedAt: null
        }
      ]

    case 'DELETE_TODO':
      let todoToRemoveIndex

      state.forEach((todo, index) => {
        if (todo.id === action.id) todoToRemoveIndex = index
      })
      state.splice(todoToRemoveIndex, 1)

      return state

    case 'EDIT_TODO':
      console.info('EDIT_TODO action', state, action)
      return state

    case 'CHANGE_STATUS':
      return state.map(todo => {
        if (todo.id === action.id) {
          todo.status = action.status
          return todo
        } else {
          return todo
        }
      })

    default:
      return state
  }
}

export default todos
