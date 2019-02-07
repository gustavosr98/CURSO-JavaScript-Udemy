const buscarPais = function (paisesArray, code3pais) {
    return paisesArray.find( (pais) => pais.alpha3Code === code3pais) 
}

const mostrarPais = function(pais){
    document.querySelector('#pais').textContent = `${pais.name} (${pais.alpha3Code}) tiene como capital ${pais.capital}`
}

const getPais = (callback) => {
    const request = new XMLHttpRequest()

    request.addEventListener('readystatechange', (e) => {
        if( e.target.readyState === 4){
            const pais = buscarPais( JSON.parse( e.target.responseText ) , 'AFG' )
            callback ( pais )
        } 
    })

    request.open('GET', 'http://restcountries.eu/rest/v2/all')
    request.send()
}

console.log( getPais( mostrarPais ) )