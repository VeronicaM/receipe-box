import React from 'react';
import { Accordion, Panel, ListGroup,ListGroupItem, PageHeader  } from 'react-bootstrap';

const Recipe = (props) =>{
    const ingredients = props.ingredients.map((val)  =>{
         return <ListGroupItem>{val}</ListGroupItem>
    });
    return (
        <div>
        <Accordion>
            <Panel header={props.title} eventKey={props.eventKey} bsStyle="success">
             <PageHeader className ="ingredientsTitle">Ingredients</PageHeader>
                <ListGroup>
                    {ingredients}
                </ListGroup>
            </Panel>
            </Accordion>
        </div>
    );

};
export default Recipe;