const renderRecipesDOM = ( recipes, searchText ) => {
    const filteredRecipes = recipes.filter( (recipe) => recipe.titulo.toLowerCase().includes( searchText.toLowerCase() ) )
    const recetasDiv = document.querySelector('#recetas')

    recetasDiv.innerHTML = ''

    if (!filteredRecipes){
        const mensajeNoHay = document.createElement('p')
        mensajeNoHay.textContent = 'We did not find any recipe, we sorry ...'
        
        recetasDiv.appendChild( mensajeNoHay )
    } else {
        recipes.forEach( (recipe) => {
            const recipeDOM = document.createElement('div')
            const recipeP = document.createElement('p')
            const recipeI = document.createElement('p')

            recipeP.textContent = `${recipe.titulo}`
            recipeI.textContent = `You need ${recipe.getIngredientesLeftCount()} ingredients`

            recipeDOM.appendChild(recipeP)
            recipeDOM.appendChild(recipeI)
            recetasDiv.appendChild(recipeDOM)
        })
    }
}

export { renderRecipesDOM }