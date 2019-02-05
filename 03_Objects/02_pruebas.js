let obj1 = {
    par1: 'hola',
    par2: 'chao'
}

let obj2 = {
    par1: 'hola',
    par2: 'chao'
}

let obj3 = obj1 

console.log('obj1 === obj2 (' + obj1 === obj2 +')' )
console.log('obj1 === obj3 (' + obj1 === obj3 +')' )
console.log('obj2 === obj3 (' + obj2 === obj3 +')' )

//MODIFICAR OBJ3 MODIFICA OBJ1
obj3.par1 = 'NAGUARA'
console.log(obj1.par1)