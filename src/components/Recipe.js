import React from 'react'

class Recipe extends React.Component {
  renderAddIngredientForm () {
    this.showAddIngredientForm = !this.showAddIngredientForm
  }

  render () {
    const props = this.props
    console.log('RECIPE PROPS', props)

    return (
      <div>
        <h3>Recipe: {props.title}</h3>
        <p>Created at: {props.createdAt}</p>
        <button onClick={() => props.onDiscardClick()}>Discard</button>
        <button onClick={() => this.showAddIngredientForm()}>Add Ingredients</button>
      </div>
    )
  }
}

export default Recipe
