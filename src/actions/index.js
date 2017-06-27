export const addTodo = (todo) => ({
  type: 'ADD_TODO',
  todo
})

export const deleteTodo = (todoId) => ({
  type: 'DELETE_TODO',
  id: todoId
})

export const editTodo = (todoId, todo) => ({
  type: 'EDIT_TODO',
  id: todoId,
  todo
})

export const changeStatus = (todoId, status) => ({
  type: 'CHANGE_STATUS',
  id: todoId,
  status
})

// RECIPES

export const createRecipe = (recipe) => ({
  type: 'CREATE_RECIPE',
  recipe
})

export const discardRecipe = (recipeId) => ({
  type: 'DISCARD_RECIPE',
  id: recipeId
})

export const addIngredient = (recipeId, ingredient) => ({
  type: 'ADD_INGREDIENT',
  id: recipeId,
  ingredient
})
