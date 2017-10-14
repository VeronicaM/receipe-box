import React from 'react';
import RecipeList from './RecipeList.jsx';
import RecipeModal from './RecipeModal.jsx';
import '../app.scss';
import {Button, Well} from 'react-bootstrap';
 class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            recipes:[
                {
                    title:"Recipe 1", 
                    ingredients:["Item 1", "Item 2"],
                    eventKey:"1",
                },
                {
                    title:"Recipe 2", 
                    ingredients:["Item 1", "Item 2"],
                    eventKey:"2",
                },
                {
                    title:"Recipe 3", 
                    ingredients:["Item 1", "Item 2"],
                    eventKey:"3",
                },
            ],
            showModal: false,
        };
    }
    handleClick(){
        this.setState({counter:this.state.counter+1});
    };
    openAdd(){
        this.setState({showModal:true, edit:false});
    }
    openEdit(){
        this.setState({showModal:true, edit:true});
    }
    close() {
        this.setState({ showModal: false, edit:false });
    }
    render(){
        return (
            <div>
                <Well>
                    <RecipeList data={this.state.recipes}/>
                </Well>
                <Button bsStyle="primary" onClick={this.openAdd.bind(this)}>Add Recipe</Button>
                <RecipeModal showModal={this.state.showModal} edit={this.state.edit} close={this.close.bind(this)}/>
             </div>
        )
    };
}
export default App;