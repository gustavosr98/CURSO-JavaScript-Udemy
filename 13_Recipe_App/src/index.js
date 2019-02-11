import {getSavedRecipes } from './requests.js'
import {renderRecipesDOM} from './dom_manipulation.js'
import uuidv4 from 'uuid/v4'
import './../public/style/index.css'

let recipes = getSavedRecipes()
let textFilter = ''

document.querySelector('#search').addEventListener('input', (e) => {
    textFilter = e.target.value
    renderRecipesDOM( recipes, textFilter)
    
})

document.querySelector('#addRecipe').addEventListener('click', () => {
    location.assign(`./edit.html#${uuidv4()}`)
})

window.addEventListener('storage', (e) => {
    recipes = getSavedRecipes()
    renderRecipesDOM(recipes, textFilter)
})

renderRecipesDOM(recipes, textFilter) 