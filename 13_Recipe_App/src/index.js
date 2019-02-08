import {getSavedRecipes, setSavedRecipes} from './requests.js'
import {renderRecipesDOM} from './dom_manipulation.js'
import Recipe from './Recipe.js'
import Ingrediente from './Ingrediente.js'
import uuidv4 from 'uuid/v4'



//CREADO OBJETOS
const ing1 = new Ingrediente( uuidv4() , 'Aguacate')
const ing2 = new Ingrediente( uuidv4() , 'Carne Molida')
const ing3 = new Ingrediente( uuidv4() , 'Salsa de Tomate')
const ing4 = new Ingrediente( uuidv4() , 'Pasta')
const ingredientes = [ing1, ing2, ing3, ing4]
const recipe1 = new Recipe( uuidv4() , 'Pasta Napole', 'Paso1. Cocinar y ya ps', ingredientes)

console.log(recipe1)
const recipes = getSavedRecipes()
recipes.push(recipe1)

setSavedRecipes( recipes )



document.querySelector('#search').addEventListener('input', (e) => {
    renderRecipesDOM( recipes, e.target.value)
})