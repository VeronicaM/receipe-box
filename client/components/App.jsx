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
            recipe: '',
            ingredients: '',
            showModal: false,
        };
    }
  
    openAdd(){
        this.setState({
            showModal:true, 
            edit:false,
            recipe:'',
            ingredients:''
        });
    }
    openEdit(recipe){
        this.setState({
               showModal:true,
               edit:true,
               recipe : recipe.title,
               ingredients : recipe.ingredients
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

    render(){
        return (
            <div>
                <Well>
                    <RecipeList editRecipe={this.openEdit.bind(this)} data={this.state.recipes} />
                </Well>
                <Button bsStyle="primary" onClick={this.openAdd.bind(this)}>Add Recipe</Button>
                <RecipeModal 
                    showModal={this.state.showModal} 
                    recipe = {this.state.recipe}
                    ingredients = {this.state.ingredients}
                    edit={this.state.edit} 
                    close={this.close.bind(this)} 
                    saveData={this.saveData.bind(this)}
                />
             </div>
        )
    };
}
export default App;