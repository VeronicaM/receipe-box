import React from 'react';
import {Modal, Button, FormGroup, ControlLabel, Input, FormControl } from 'react-bootstrap';
const RecipeModal = (props) =>{
    const text = props.edit ? "Edit" : "Add"; 
    return (
        <Modal 
          show={props.showModal} 
        >
          <Modal.Header>
            <Modal.Title>{text} Recipe</Modal.Title>
          </Modal.Header>
    
          <Modal.Body>
            <FormGroup>
              <ControlLabel>Recipe</ControlLabel>
              <FormControl type="text" placeholder="Recipe Name" />
            </FormGroup>
              <FormGroup controlId="formControlsTextarea">
                  <ControlLabel>Ingredients</ControlLabel>
                  <FormControl componentClass="textarea"  placeholder="Enter ingredients separated by commas" />
              </FormGroup>
          </Modal.Body>
    
          <Modal.Footer>
            <Button onClick={props.close}>Close</Button>
            <Button bsStyle="primary">{text} Recipe</Button>
          </Modal.Footer>
    
        </Modal>
    );
};

  export default RecipeModal;