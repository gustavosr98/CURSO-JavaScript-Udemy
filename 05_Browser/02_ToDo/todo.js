const notes = [{
    title: 'my next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habbits to work on',
    body: 'Exercise. Eating a bit better.'
}, {
    title: 'Office modification',
    body: 'Get a new seat'
}]

const filters = {
    searchText: ''
}

const renderNotes = function (notes, filters) {
    //FILTRANDO A PARTIR DE MI ARRAY
    const filteredNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#notes').innerHTML = ''
    
    //AGREGANDO A PAGINA LAS NOTAS QUE PASARON EL FILTRO
    filteredNotes.forEach(function (note) {
        const noteEl = document.createElement('p')
        noteEl.textContent = note.title
        document.querySelector('#notes').appendChild(noteEl)
    })
}

//MOSTRANDO AL MENOS ALGO EN LA PAGINA
renderNotes(notes, filters)

//CUANDO SE TOCA EL BOTON DE CREAR SOLO DICE QUE FUE TOCADO
document.querySelector('#create-note').addEventListener('click', function (e) {
    e.target.textContent = 'The button was clicked'
})

//CADA VEZ QUE EL INPUT DE SEARCH TEXT CAMBIA SE LLAMA A LA FUNCION "renderNotes"
document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})