// terça-feira, 19/07/2022 as 14:57:10 h +|-

export default class cliente {
   #id: string
   #nome: string
   #idade: number
    
    constructor(nome: string, idade:number, id:string = null ){
        this.#nome = nome
        this.#idade = idade
        this.#id = id
    }
     static vazio (){
    return new cliente('', 0)
 }    
    get id() {
        return this.#id
    }
    get nome(){
        return this.#nome
    }
    get idade() {
        return this.#idade
    }
}