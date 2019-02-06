class Persona {
    constructor(name){
        this.nombre = name
        this.sexo = 'indefinido'
    }   

    static saludo(){
        console.log('Hola')
    }

    saludoPersonal(){
        console.log(`Hola, soy ${this.nombre}`)
    }
}

//STATIC METHOD
Persona.saludo()

//INSTANCIAR
let p1 = new Persona("Tato")

//METODO NORMAL
p1.saludoPersonal()

//PROBANDO ACCESO A ATRIBUTOS -> SON PUBLICOS
console.log(p1.nombre)