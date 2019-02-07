document.querySelector('#paisForm').addEventListener('submit' , (e) => {
    e.preventDefault()

    getPaisesPromise(e.target.elements.nombrePaisBuscar.value)
    .then( paises => paises.json() )
    .then( paises => { 
        const listaPaises = paises
        const continente = listaPaises.find( (pais) => pais.name.toLowerCase().includes( e.target.elements.nombrePaisBuscar.value.toLowerCase() ) ).region
        const paisesEnMismoContinente = listaPaises.filter( (pais) => pais.region === continente)
        
        renderPaises(paisesEnMismoContinente)
    })
    .catch( error => console.log(error) )
})