const buscarPais = function (paisesArray, code3pais) {
    return paisesArray.find( (pais) => pais.alpha3Code === code3pais) 
}
