//PROTOTYPES
const pessoa = {
    maos: 2,
}

console.log(Object.getPrototypeOf(pessoa))
console.log(Object.getPrototypeOf(pessoa) === Object.prototype)//true

console.log(pessoa.hasOwnProperty('maos'))//true

//Object PAI hasOwnProperty

const pessoaNova = Object.create(pessoa)//Create object from person object

console.log(pessoaNova)
console.log(pessoaNova.hasOwnProperty('maos')) //false


console.log(Object.getPrototypeOf(pessoaNova) === pessoa) //new person and person have the same object