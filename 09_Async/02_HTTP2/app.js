const request = new XMLHttpRequest()

request.addEventListener('readystatechange', (e) => {
    if( e.target.readyState === 4){
        let pais = buscarPais( JSON.parse( e.target.responseText ) , 'VEN' )
        console.log(JSON.stringify(pais, null, 4))
    } else {
        console.log(e.target)
    }
})

request.open('GET', 'http://restcountries.eu/rest/v2/all')
request.send()
