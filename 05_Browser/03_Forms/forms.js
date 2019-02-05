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

//MOSTRANDO AL MENOS ALGO EN LA PAGINA
renderNotes(notes, '')

//CADA VEZ QUE EL INPUT DE SEARCH TEXT CAMBIA SE LLAMA A LA FUNCION "renderNotes"
document.querySelector('#buscador').addEventListener('input', function(e){
    renderNotes( notes, e.target.value )
})


//AGREGAR ELEMENTO AL ARRAY
document.querySelector('#formulario1').addEventListener('submit', function(e) {
    e.preventDefault()

    const newTitulo = e.target.elements.titulo.value
    const newFecha = e.target.elements.fecha.value
    notes.push( { titulo: newTitulo, date: newFecha } )

    e.target.elements.titulo.value = ''
    e.target.elements.fecha.value = null

    renderNotes(notes, '')
})


