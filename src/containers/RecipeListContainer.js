import { connect } from 'react-redux'
import { discardRecipe } from '../actions'
import RecipeList from '../components/RecipeList'

const mapStateToPros = (state) => {
  return {
    recipes: state.recipes
  }
}

const mapDispatchToProps = {
  onDiscardClick: discardRecipe
}

const RecipeListContainer = connect(
  mapStateToPros,
  mapDispatchToProps
)(RecipeList)

export default RecipeListContainer
