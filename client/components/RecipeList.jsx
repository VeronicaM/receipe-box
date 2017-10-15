import React from 'react';
import Recipe from './Recipe.jsx';
import {Accordion, Panel} from 'react-bootstrap';
const RecipeList = (props) =>{
    return (
        <div>
            <Accordion>
                {props.data.map(recipe => 
                    <Panel key={recipe.eventKey} header={recipe.title} eventKey={recipe.eventKey} bsStyle="success">
                        <Recipe  deleteRecipe={props.deleteRecipe} editRecipe={props.editRecipe} {...recipe}/>
                    </Panel>
                )}         
            </Accordion>    
        </div>
    );
}
export default RecipeList;