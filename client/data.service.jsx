const DataService  = (() =>{
    let index = 1;
    const getRecipes = function(){
        let recipes = JSON.parse(localStorage.getItem('recipes')) || [];
        if (recipes.length === 0) {
            recipes.push({
                    title:"Recipe 1", 
                    ingredients:["Item 1", "Item 2"],
                    eventKey:index++,
                });
               recipes.push({
                    title:"Recipe 2", 
                    ingredients:["Item 1", "Item 2"],
                    eventKey:index++,
                })
                recipes.push({
                    title:"Recipe 3", 
                    ingredients:["Item 1", "Item 2"],
                    eventKey:index++,
                })
           localStorage.setItem('recipes', JSON.stringify(recipes));
        }
        return recipes;
    }
    const getIndex = function(){
        let recipes = JSON.parse(localStorage.getItem('recipes')) || [];
        return recipes[recipes.length-1].eventKey+1;
    }
    const addRecipe = function(recipe){
        let recipes = JSON.parse(localStorage.getItem('recipes')) || [];
        recipe.eventKey = getIndex();
        recipe.ingredients = recipe.ingredients.split(','); 
        recipes.push(recipe);
        localStorage.setItem('recipes', JSON.stringify(recipes));
    }
    const deleteRecipe = function(recipe){
        let recipes = JSON.parse(localStorage.getItem('recipes')) || [];
        let filteredRecipes = recipes.filter(function(r) {
            return r.eventKey !== recipe.eventKey;
        });
        localStorage.setItem('recipes', JSON.stringify(filteredRecipes));
    }
    const editRecipe = function(recipe){
        let recipes = JSON.parse(localStorage.getItem('recipes')) || [];
        let  updatedRecipes = Object.assign({},recipes, recipe);
        localStorage.setItem('recipes', JSON.stringify(updatedRecipes));
    }   
    return {
        getRecipes : getRecipes,
        addRecipe : addRecipe,
        deleteRecipe : deleteRecipe,
        editRecipe : editRecipe
    }
})();
export default DataService;