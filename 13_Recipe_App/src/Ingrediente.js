export default class Ingrediente {
    constructor(_id, _nombre, _loTengo){
        this.id = _id,
        this.nombre = _nombre,
        this.loTengo = _loTengo 
    }
    
    marcarTengo() {
        this.loTengo = true
    }

    marcarNoTengo() {
        this.loTengo = false
    }

    setNombre( newNombre ){
        this.nombre = newNombre
    }

    getNombre() { 
        return this.nombre
    }
}