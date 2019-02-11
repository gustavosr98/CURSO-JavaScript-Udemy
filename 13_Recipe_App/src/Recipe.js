export default class Recipe {
    constructor(_id , _titulo, _instrucciones, _ingredientes){
        this.id = _id
        this.titulo = _titulo
        this.instrucciones = _instrucciones 
        this.ingredientes = _ingredientes
    }

    modificarInstrucciones( newInstrucciones ){
        this.instrucciones = newInstrucciones
    }

    agregarIngrediente( nombreIngrediente ){
        this.ingredientes.push( new Ingrediente(nombreIngrediente) )
    }

    eliminarIngrediente( _id ){
        const indexPorBorrar = this.ingredientes.findIndex( (item) => item.id === _id)
        this.ingredientes.slice(indexPorBorrar, 1)
    }

    getIngredientes(){
        return this.ingredientes 
    }

    getIngredientesLeftCount(){
        let i = 0
        this.ingredientes.forEach( (ingrediente) => i += !ingrediente.loTengo )
        return i
    }
}

