import React from 'react'
// import AddTodo from '../containers/AddTodo.jsx'
// import TodosContainer from '../containers/TodosContainer'
import AddRecipe from '../containers/AddRecipe'
import RecipeListContainer from '../containers/RecipeListContainer'

class App extends React.Component {
  render () {
    return (
      <div>
        <AddRecipe />
        <RecipeListContainer />
      </div>
    )
  }
}

export default App
