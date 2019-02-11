import { getSavedRecipes, setSavedRecipes } from './requests.js'
import { renderIngredientesDOM } from './dom_manipulation.js'
import './../public/style/edit.css'

const recipes = getSavedRecipes()

const recipe = recipes.find((item) => item.id === location.hash.substr(1) )

const recipeTitleDOM = document.querySelector('#titulo')
recipeTitleDOM.value = recipe.titulo
recipeTitleDOM.addEventListener('input', (e) => {
    recipe.titulo = e.target.value
    setSavedRecipes(recipes)
})

const recipeInstruccionesDOM = document.querySelector('#instrucciones')
recipeInstruccionesDOM.value = recipe.instrucciones
recipeInstruccionesDOM.addEventListener('input', (e) => {
    recipe.instrucciones = e.target.value
    setSavedRecipes(recipes)
})

renderIngredientesDOM(recipes, recipe)