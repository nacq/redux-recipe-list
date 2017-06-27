import _ from 'lodash'

const recipes = (state = [], action) => {
  let newState
  console.info('RECEIVED AN ACTION', action)

  switch (action.type) {
    case 'CREATE_RECIPE':
      return [
        ...state,
        {
          id: 'recipe' + Date.now(),
          title: action.recipe.title,
          ingredients: [],
          createdAt: Date.now(),
          updatedAt: null
        }
      ]

    case 'DISCARD_RECIPE':
      newState = _.extend([], state)
      const recipeIndexToDelete = _.findIndex(state, recipe => {
        return recipe.id === action.id
      })

      newState.splice(recipeIndexToDelete, 1)

      return newState

    case 'ADD_INGREDIENT':
      newState = _.extend([], state)
      const recipeIndexToAddIngredient = _.findIndex(state, recipe => {
        return recipe.id === action.id
      })

      newState[recipeIndexToAddIngredient].ingredients.push(action.ingredient)

      return newState

    default:
      return state
  }
}

export default recipes
