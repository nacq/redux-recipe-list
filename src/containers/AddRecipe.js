import React from 'react'
import { connect } from 'react-redux'
import { createRecipe } from '../actions'

let AddRecipe = class AddRecipe extends React.Component {
  handleFormSubmit (event) {
    event.preventDefault()

    if (this.refs.recipeTitle.value) {
      this.props.dispatch(createRecipe({ title: this.refs.recipeTitle.value }))
      this.refs.recipeTitle.value = ''
    }
  }

  render () {
    return (
      <form onSubmit={(e) => this.handleFormSubmit(e)}>
        <input type='text' ref='recipeTitle' />
        <input type='submit' value='Start recipe' />
      </form>
    )
  }
}

AddRecipe = connect()(AddRecipe)

export default AddRecipe
