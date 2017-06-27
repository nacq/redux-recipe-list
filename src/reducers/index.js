import { combineReducers } from 'redux'
import todos from './todos'
import recipes from './recipes'

// combine all application reducers here
const todoAppReducer = combineReducers({
  todos,
  recipes
})

export default todoAppReducer
