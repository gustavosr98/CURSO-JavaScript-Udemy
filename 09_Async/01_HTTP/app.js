const request = new XMLHttpRequest()

request.addEventListener('readystatechange', (e) => {
    if( e.target.readyState === 4 ){
        cambiarParrafo ( JSON.parse( e.target.responseText ).puzzle )
    }
})

request.open('GET', 'http://puzzle.mead.io/puzzle')
request.send()
