const cabiarTitulo = (pais) => {
    document.querySelector('#header').textContent = `Paises en el mismo contintente ${pais.name}`
}

const renderPaises = (listaPaises) => {

    const div = document.querySelector('#paises') 

    div.innerHTML = ''

    console.log(listaPaises)

    listaPaises.forEach( (pais) => {
        const p = document.createElement('p')
        p.textContent = pais.name
        div.appendChild(p)
    })
    
}