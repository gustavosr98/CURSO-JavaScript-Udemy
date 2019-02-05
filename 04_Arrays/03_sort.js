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

//ordenar por fecha mas vieja a mas nueva

const sortByDate = function(gamesArray) {
    return gamesArray.sort( function(a , b) {
        if (a.year < b.year)
            return -1
        else if (a.year > b.year)
            return 1
        else
            return 0
    })
}

let sortedGames = sortByDate(gamesArray)
console.log(sortedGames) 

