const buscarPais = function (paisesArray, code3pais) {
    return paisesArray.find( (pais) => pais.alpha3Code === code3pais) 
}

const mostrarPais = function(pais){
    document.querySelector('#pais').textContent = `${pais.name} (${pais.alpha3Code}) tiene como capital ${pais.capital}`
}

const mostrarError = function(errorText){
    document.querySelector('#pais').textContent = errorText 
}

// NEW PROMISE ( (RESOLVE , REJECT) => { CODIGO... } )
const getPais = (code3) => new Promise( (resolve, reject) => {
    const request = new XMLHttpRequest()

    request.addEventListener('readystatechange', (e) => {
        if( e.target.readyState === 4 && e.target.status === 200 ){
            const pais = buscarPais( JSON.parse( e.target.responseText ) , code3 )
            //CUANDO TODO BIEN
            resolve ( pais ) //rValue
        } else if (e.target.readyState === 4){
            //SI HAY ERROR
            reject( 'Ha ocurrido un error' ) //errorValue 
        }
    })

    request.open('GET', 'http://restcountries.eu/rest/v2/all')
    request.send()
})

//MY_PROMISE.THEN()
getPais('AFG').then(
    //G(X)
    //rValue 
    (pais) => {
        mostrarPais(pais)
} , 
    //H(X)
    //errorValue
    (errorText) => {
        mostrarError(errorText)
})