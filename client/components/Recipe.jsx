import React from 'react';
import { Button, ListGroup,ListGroupItem, PageHeader  } from 'react-bootstrap';

const Recipe = (props) =>{
    const ingredients = props.ingredients.map((val)  =>{
         return <ListGroupItem key={props.eventKey+val}>{val}</ListGroupItem>
    });
    const handleEdit = function(){
        props.editRecipe({title:props.title, ingredients:props.ingredients});
    }
    return (
            <div>
             <PageHeader className ="ingredientsTitle">Ingredients</PageHeader>
                <ListGroup>
                    {ingredients}
                </ListGroup>
                <div>
                    <Button bsStyle="danger">Delete</Button> 
                    <Button onClick={handleEdit}>Edit</Button>
                </div>
            </div>
           
    );

};
export default Recipe;