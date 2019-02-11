import { getSavedRecipes, setSavedRecipes } from './requests.js'
import { renderIngredientesDOM } from './dom_manipulation.js'
import './../public/style/edit.css'
import Recipe from './Recipe.js' 
import uuidv4 from 'uuid/v4'

let recipes = getSavedRecipes()

let recipe = recipes.find((item) => item.id === location.hash.substr(1) )
if (!recipe) {
    recipe = new Recipe( location.hash.substr(1) , 'Inserte un Titulo', 'Escriba instrucciones...', [] )
    recipes.push(recipe)
    setSavedRecipes(recipes)
}

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

document.querySelector('#deleteRecipe').addEventListener('click', () => {
    recipes.splice( recipes.indexOf(recipe), 1)
    setSavedRecipes(recipes)
    location.assign('./index.html')
})

document.querySelector('#addIform').addEventListener('submit', (e) => {
    e.preventDefault()
    recipe.ingredientes.push( { id: uuidv4() , nombre: e.target.elements.nameI.value , loTengo:false } )
    renderIngredientesDOM(recipes, recipe)
    setSavedRecipes(recipes)
})

renderIngredientesDOM(recipes, recipe) 