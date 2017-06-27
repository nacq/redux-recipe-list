import React from 'react'
import Recipe from './Recipe'

class RecipeList extends React.Component {
  getRecipeProps (recipe) {
    return {
      title: recipe.title,
      createdAt: recipe.createdAt,
      onDiscardClick: this.props.onDiscardClick
    }
  }

  renderEmptyMessage () {
    return (this.props.recipes.length) ? null : <p>No recipes to show</p>
  }

  render () {
    const props = this.props

    return (
      <ul>
        {this.renderEmptyMessage()}
        {props.recipes.map(recipe =>
          <Recipe {...this.getRecipeProps(recipe)} />
        )}
      </ul>
    )
  }
}

export default RecipeList
