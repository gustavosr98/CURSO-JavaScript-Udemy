const notes = [
    {
        id: 0,
        titulo:'Aguacate',
        date: 1900
    },
    {
        id: 1,
        titulo:'Fresa',
        date: 1970
    },
    {
        id: 2,
        titulo:'Patilla',
        date: 2019
    }
]


function create_UUID(){
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (dt + Math.random()*16)%16 | 0;
        dt = Math.floor(dt/16);
        return (c=='x' ? r :(r&0x3|0x8)).toString(16);
    });
    return uuid;
}

const deleteById = function(id){
    const i = notes.findIndex( function(item){
        return item.id === id
    })

    if (i > -1)
        notes.splice(i, 1)
    
} 

const renderNotes = function( notes, searchText ){
    //FILTRANDO A PARTIR DE MI ARRAY
    const filteredNotes = notes.filter( function(item){
        return item.titulo.toLowerCase().includes( searchText.toLowerCase() )
    })
    
    //LIMPIO DIV NOTES    
    document.querySelector('#notes').innerHTML = ''

    //AGREGANDO A PAGINA LAS NOTAS QUE PASARON EL FILTRO
    filteredNotes.forEach( function(item) {

        //CREAR <div>
        const div = document.createElement('div')
        //CREAR <button>
        const button = document.createElement('button')
        button.textContent = 'x'
        button.addEventListener('click', function(){
            deleteById(item.id)
            renderNotes(notes, '')
        })

        //CREAR <span>
        const span = document.createElement('span')
        span.textContent = item.titulo

        //APPENDING
        div.appendChild(button)
        div.appendChild(span)

        document.querySelector('#notes').appendChild(div)

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
        id: create_UUID(),
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