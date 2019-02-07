const buscarPais = function (paisesArray, code3pais) {
    return paisesArray.find( (pais) => pais.alpha3Code === code3pais) 
}

const mostrarPais = function(pais){
    document.querySelector('#pais').textContent = `${pais.name} (${pais.alpha3Code}) tiene como capital ${pais.capital}`
}
