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

const filterGames = function(gamesArray, word){
    return gamesArray.filter( function(item, index){
        let boolHasTheWord = item.title.toLowerCase().includes( word.toLowerCase() ) 
        return boolHasTheWord
    })
}

const filteredGames = filterGames(gamesArray, "O")
console.log(filteredGames);