let gamesArray = [
    {
        title: 'Pokemon',
        year: 1998
    },
    {
        title: 'Mario',
        year: 1996
    },
    {
        title: 'Zelda',
        year: 1990
    }
]

let gamePrueba = {
    title: 'Pokemon',
    year: 1998
}

const findGame = function(gamesArray , game) {
    const index = gamesArray.findIndex( function(item, index) {
        return game.title === item.title && game.year === item.year;
    })
    console.log(index)
    return gamesArray[index]
}


let gameOtro = findGame(gamesArray , gamePrueba)


console.log(gameOtro);
console.log(gamePrueba);  
console.log(gamesArray[0]);  

console.log('gamesArray[0] === gameOtro ' + (gamesArray[0] === gameOtro) ); //MISMA REFERENCIA -> TRUE
console.log('gamesArray[0] === gamePrueba  ' + (gamesArray[0] === gamePrueba)  );  //MISMO CONTENIDO -> FALSE

