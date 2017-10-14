import React from 'react';
import Recipe from './Recipe.jsx';
import {Well} from 'react-bootstrap';
const RecipeList = (props) =>{
    return (
        <div>
             <Well>
                 {props.data.map(recipe => <Recipe {...recipe}/>)}
             </Well>
        </div>
    );
}
export default RecipeList;