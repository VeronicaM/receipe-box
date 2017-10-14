import React from 'react';
import RecipeList from './RecipeList.jsx';
import '../app.scss';
 class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {recipes:[
            {
                title:"Recipe 1", 
                ingredients:["Item 1", "Item 2"],
                eventKey:"1"
            },
            {
                title:"Recipe 2", 
                ingredients:["Item 1", "Item 2"],
                eventKey:"2"
            },
            {
                title:"Recipe 3", 
                ingredients:["Item 1", "Item 2"],
                eventKey:"3"
            },
        ]};
    }
    handleClick(){
        this.setState({counter:this.state.counter+1});
    };
    render(){
        return (
            <RecipeList data={this.state.recipes}/>
        )
    };
}
export default App;