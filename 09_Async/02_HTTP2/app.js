const request = new XMLHttpRequest()

request.addEventListener('readystatechange', (e) => {
    if( e.target.readyState === 4){
        const pais = buscarPais( JSON.parse( e.target.responseText ) , 'AFG' )
        console.log(JSON.stringify(pais, null, 4))
        mostrarPais( pais )
    } else {
        console.log(e.target)
    }
})

request.open('GET', 'http://restcountries.eu/rest/v2/all')
request.send()
