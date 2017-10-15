import React from 'react';
import RecipeList from './RecipeList.jsx';
import RecipeModal from './RecipeModal.jsx';
import '../app.scss';
import DataService from '../data.service.jsx';
import {Button, Well} from 'react-bootstrap';
 class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            recipes: DataService.getRecipes(),
            recipe: {},
            showModal: false,
        };
    }
  
    openAdd(){
        this.setState({
            showModal:true, 
            edit:false,
            recipe:{},
        });
    }
    openEdit(recipe){
        this.setState({
               showModal:true,
               edit:true,
               recipe : recipe,
            });
    }
    close() {
        this.setState({ showModal: false, edit:false });
    }
    saveData(data){
        if(this.state.edit){
            DataService.editRecipe(data);
        }else{
            DataService.addRecipe(data);
        }
        this.setState({recipes:DataService.getRecipes()});
    }
    deleteRecipe(data){
        DataService.deleteRecipe(data);
        this.setState({recipes:DataService.getRecipes()});
    }

    render(){
        return (
            <div>
                <Well>
                    <RecipeList editRecipe={this.openEdit.bind(this)} deleteRecipe={this.deleteRecipe.bind(this)} data={this.state.recipes} />
                </Well>
                <Button bsStyle="primary" bsSize="large" onClick={this.openAdd.bind(this)}>Add Recipe</Button>
                <RecipeModal 
                    showModal={this.state.showModal} 
                    recipe = {this.state.recipe}
                    edit={this.state.edit} 
                    close={this.close.bind(this)} 
                    saveData={this.saveData.bind(this)}
                />
             </div>
        )
    };
}
export default App;