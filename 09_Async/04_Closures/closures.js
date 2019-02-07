//EJEMPLO 1 ---> COUNTER
const createCounter = () => {
    let count = 0

    return {
        increment() {
            count++
        },
        decrement() {
            count--
        },
        get() {
            return count
        }
    }
}

const counter = createCounter()
counter.increment()
counter.decrement()
counter.decrement()
console.log(counter.get())




//EJEMPLO 2 ---> ADDER
const add = (a, b) => a + b
const createAdder = (a) => {
    return (b) => {
        return a + b
    }
}

const add10 = createAdder(10)
console.log(add10(-2))
console.log(add10(20))

const add100 = createAdder(100)
console.log(add100(-90))




//EJEMPLO 3 ---> TIPPER
const createTipper = (baseTip) => {
    return (amount) => {
        return baseTip * amount
    }
}
const tip20 = createTipper(.2)
console.log(tip20(100))

const tip30 = createTipper(.3)
console.log(tip30(100))