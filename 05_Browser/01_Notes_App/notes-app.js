/*
DELETES FIRST <p>
const p = document.querySelector('p')
p.remove()
*/

//RESALTAR <P> QUE CONTENGAN "WEB"
const ps = document.querySelectorAll('p')

ps.forEach( function(item){
    if( item.innerText.toLowerCase().includes('web'))
        item.style.color = 'red'
})

//AGREGAR UN NUEVO ELEMENTO
const newP = document.createElement('p')
newP.textContent = 'Yo soy el nuevo'
newP.style.color = 'green'

const body = document.querySelector('body')
body.appendChild(newP)

//USER INTERACTION

//BOTON
let x = 0;
document.querySelector('#botonCrearNota').addEventListener('click', function(e){
    x = x + 1;
    e.target.textContent = 'Me has tocado ' + x + ' veces'
})

//SALGA EN CONSOLA LO QUE HA ESCRITO
document.querySelector('#inputCrearNota').addEventListener('input', function(e){
    console.log(e.target.value)
})


