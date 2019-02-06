const account = {
    name: 'Tato Sanchez',
    expenses: [
        {
            description: 'Cafe',
            amount: 3
        }
    ],

    //Method to addExpenses
    addExpense : function ( expense ) {
        this.expenses.push( expense )
    },

    getAccountSummary : function (){
        let totalExpenses = 0

        this.expenses.forEach( function( item, index){
            totalExpenses = totalExpenses + item.amount
        })

        console.log(totalExpenses)
        return `The total amount ${this.name} has expended is $${totalExpenses}` //${var} no me esta funcionando
    },

    sortByMostExpensive : function(){
        this.expenses.sort( function(a,b) {
            if ( a.amount > b.amount )
                return -1
            else if ( a.amount < b.amount)
                return 1
            else
                return 0
        })
    }
}


//Expenses to be added to my account 
const expense1 = {
    description: 'Birras el viernes',
    amount: 10
}
const expense2 = {
    description: 'Cine con novia',
    amount: 7
}
const expense3 = {
    description: 'Zapatos nuevos',
    amount: 18
}

account.addExpense(expense1)
account.addExpense(expense2)
account.addExpense(expense3)

account.sortByMostExpensive();

console.log(account.getAccountSummary())
console.log(account.expenses)