const notes = [
    {
        titulo:'Aguacate',
        date: 1900
    },
    {
        titulo:'Fresa',
        date: 1970
    },
    {
        titulo:'Patilla',
        date: 2019
    }
]

console.log(notes)

const renderNotes = function( notes, searchText ){
    //FILTRANDO A PARTIR DE MI ARRAY
    const filteredNotes = notes.filter( function(item){
        return item.titulo.toLowerCase().includes( searchText.toLowerCase() )
    })
    
    //LIMPIO DIV NOTES    
    document.querySelector('#notes').innerHTML = ''

    //AGREGANDO A PAGINA LAS NOTAS QUE PASARON EL FILTRO
    filteredNotes.forEach( function(item) {
        const tmpP = document.createElement('p')
        tmpP.textContent = item.titulo
        document.querySelector('#notes').appendChild(tmpP)
    })

}

//CADA VEZ QUE EL INPUT DE SEARCH TEXT CAMBIA SE LLAMA A LA FUNCION "renderNotes"
document.querySelector('#buscador').addEventListener('input', function(e){
    renderNotes( notes, e.target.value )
})


//AGREGAR ELEMENTO AL ARRAY
document.querySelector('#formulario1').addEventListener('submit', function(e) {
    e.preventDefault()

    const newNote = {
        titulo: e.target.elements.titulo.value, 
        date: e.target.elements.fecha.value
    }

    notes.push( newNote )

    //AGREGAR A LOCAL STORAGE
    localStorage.setItem( notes.indexOf(newNote) , JSON.stringify(newNote) )

    e.target.elements.titulo.value = ''
    e.target.elements.fecha.value = null
    
    renderNotes(notes, '')
})

//LEER LOCAL STORAGE
let hayMas = true
let i = 3;
while(hayMas){
    let tmpNote = localStorage.getItem( i )

    if (tmpNote === null)
        hayMas = false
    else {
        notes.push( JSON.parse(tmpNote) )
        i++
    } 
}

//MOSTRANDO AL MENOS ALGO EN LA PAGINA
renderNotes(notes, '')