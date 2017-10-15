import React from 'react';
import ReactDOM from 'react-dom';
import {Modal, Button, FormGroup, ControlLabel, Input, FormControl } from 'react-bootstrap';
class RecipeModal extends React.Component{
    constructor(props){
      super(props);
      this.state = {
                  recipe : this.props.recipe || '',
                  ingredients :this.props.ingredients || '',
                  formErrors: {recipe: '', ingredients: ''},
                  recipeValid: false,
                  ingredientsValid: false,
                  formValid: false,
                  text:this.props.edit ? "Edit" : "Add",
                };
    }
    componentWillReceiveProps(nextProps) {
    
      this.setState({  
              recipe : nextProps.recipe || '',
              ingredients :nextProps.ingredients || '', 
              text:nextProps.edit ? "Edit" : "Add",
            });
    }
  
    handleSave(){
        this.props.saveData({title:this.state.recipe, ingredients:this.state.ingredients});
        this.setState({recipe:this.props.recipe || '', ingredients:this.props.ingredients || ''});
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
                value = {this.state.recipe}
                onChange= {(event)=>this.setState({recipe : event.target.value})}
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