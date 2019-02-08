const getSavedRecipes = () => {
    const savedRecipes =  JSON.parse( localStorage.getItem('recipes') )
    return ( savedRecipes ? savedRecipes : [] ) 
}

const setSavedRecipes = (recipes) => {
    localStorage.setItem('recipes', JSON.stringify( recipes ) )
}

export {getSavedRecipes, setSavedRecipes}