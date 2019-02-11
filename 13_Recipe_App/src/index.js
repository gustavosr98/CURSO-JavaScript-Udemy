import {getSavedRecipes } from './requests.js'
import {renderRecipesDOM} from './dom_manipulation.js'
import uuidv4 from 'uuid/v4'
import './../public/style/index.css'

const recipes = getSavedRecipes()

document.querySelector('#search').addEventListener('input', () => {
    renderRecipesDOM( recipes, e.target.value)
    
})

document.querySelector('#addRecipe').addEventListener('click', () => {
    location.assign(`./edit.html#${uuidv4()}`)
})

renderRecipesDOM(recipes, '')