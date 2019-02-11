import Recipe from './Recipe.js'
import { setSavedRecipes } from './requests.js'


const renderRecipesDOM = ( recipes, searchText ) => {
    const filteredRecipes = recipes.filter( (recipe) => recipe.titulo.toLowerCase().includes( searchText.toLowerCase() ) )
    const recetasDiv = document.querySelector('#recetas')

    recetasDiv.innerHTML = ''

    if (!filteredRecipes){
        const mensajeNoHay = document.createElement('p')
        mensajeNoHay.textContent = 'We did not find any recipe, we sorry ...'
        
        recetasDiv.appendChild( mensajeNoHay )
    } else {
        filteredRecipes.forEach( (recipe) => {
            const recipeObj = new Recipe( recipe.id , recipe.titulo, recipe.instrucciones, recipe.ingredientes)

            const recipeDOM = document.createElement('div')
            const recipeP = document.createElement('p')
            const recipeI = document.createElement('p')

            recipeP.textContent = `${recipe.titulo}`
            recipeI.textContent = `You need ${recipeObj.getIngredientesLeftCount()} ingredients`
            
            recipeDOM.setAttribute('class','recipe')

            recipeDOM.appendChild(recipeP)
            recipeDOM.appendChild(recipeI)
            recetasDiv.appendChild(recipeDOM)

            recipeDOM.addEventListener('click', (e) => {
                location.assign(`./edit.html#${recipe.id}`)
            })
        })
    }
}

const renderIngredientesDOM = (recetas, receta) => {
    const ingredientesDIV = document.querySelector('#ingredientes')

    ingredientesDIV.innerHTML = ''

    if (!ingredientes) {
        const mensajeNoHay = document.createElement('p')
        mensajeNoHay.textContent = 'You have not added any ingridient ...'

        ingredientesDIV.appendChild(mensajeNoHay)
    } else {
        receta.ingredientes.forEach( (ingrediente) => {
            const ingredienteDOM = document.createElement('div')
            const ingredienteC = document.createElement('input')
            const ingredienteP = document.createElement('span')
            const ingredienteS = document.createElement('button')
            
            ingredienteDOM.setAttribute('class', 'ingrediente')
            ingredienteC.setAttribute('type','checkbox')
            ingredienteS.setAttribute('class','removeI')
            
            ingredienteC.checked = ingrediente.loTengo
            ingredienteP.textContent = `${ingrediente.nombre}`
            ingredienteS.textContent = 'remove'

            ingredienteDOM.appendChild(ingredienteC)
            ingredienteDOM.appendChild(ingredienteP)
            ingredienteDOM.appendChild(ingredienteS)
            ingredientesDIV.appendChild(ingredienteDOM)

            ingredienteC.addEventListener('click', () => {
                ingrediente.loTengo = !ingrediente.loTengo
                setSavedRecipes(recetas)                
            })

            ingredienteS.addEventListener('click', () => {
                receta.ingredientes.splice( receta.ingredientes.findIndex( (item) => item.id === ingrediente.id) ,1 )
                setSavedRecipes(recetas)
                renderIngredientesDOM(recetas, receta)
            })

        })
    }
}

export { renderRecipesDOM, renderIngredientesDOM }