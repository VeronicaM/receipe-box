import React from 'react';
import ReactDOM from 'react-dom';
import {Modal, Button, FormGroup, ControlLabel, Input, FormControl } from 'react-bootstrap';
class RecipeModal extends React.Component{
    constructor(props){
      super(props);
      this.state = {
                  recipeTitle : this.props.recipe.title || '',
                  ingredients: this.props.recipe.ingredients || '',
                  formErrors: {recipe: '', ingredients: ''},
                  recipeValid: false,
                  ingredientsValid: false,
                  formValid: false,
                  text:this.props.edit ? "Edit" : "Add",
                };
    }
    componentWillReceiveProps(nextProps) {
    
      this.setState({  
              recipeTitle : nextProps.recipe.title || '',
              ingredients :nextProps.recipe.ingredients || '', 
              recipe : nextProps.recipe,
              text:nextProps.edit ? "Edit" : "Add",
            });
    }
  
    handleSave(){
       const saveRecipe = Object.assign({},this.state.recipe, {title:this.state.recipeTitle, ingredients:this.state.ingredients});
        this.props.saveData(saveRecipe);
        this.setState({recipeTitle:this.props.recipe.title || '', ingredients:this.props.recipe.ingredients || ''});
        this.props.close();
    };
    render(){
      return (
        <Modal show={this.props.showModal}>
          <Modal.Header>
            <Modal.Title>{this.state.text} Recipe</Modal.Title>
          </Modal.Header>
    
          <Modal.Body>
            <FormGroup>
              <ControlLabel>Recipe</ControlLabel>
              <FormControl 
                type="text" 
                value = {this.state.recipeTitle}
                onChange= {(event)=>this.setState({recipeTitle : event.target.value})}
                placeholder="Recipe Name"
                required />
            </FormGroup>
              <FormGroup controlId="formControlsTextarea">
                  <ControlLabel>Ingredients</ControlLabel>
                  <FormControl 
                    componentClass="textarea"
                    value = {this.state.ingredients}
                    onChange={event => this.setState({ingredients :event.target.value})}
                    placeholder="Enter ingredients separated by commas" 
                    required
                    />
              </FormGroup>
          </Modal.Body>
    
          <Modal.Footer>
            <Button onClick={this.props.close}>Close</Button>
            <Button bsStyle="primary" onClick={this.handleSave.bind(this)}>{this.state.text} Recipe</Button>
          </Modal.Footer>
    
        </Modal>
     );
  }
    
};

  export default RecipeModal;