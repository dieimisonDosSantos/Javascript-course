let reg1 = new RegExp('Bola')

console.log(reg1.test('Tem Bola?'))//true
console.log(reg1.test('Não Tem'))//false

//===================================================//
let reg2 = /bola/;

console.log(reg2.test('Tem bola?'))//true
console.log(reg2.test('Não Tem'))//false

//===================================================//
let text = 'Tem bola na cesta'

console.log(reg2.test(text))//true

//===================================================//
console.log(/quadrado/.test('Onde tem um quadrado'))//true
console.log(/quadrado/.test('323232423523454quadrado0291201'))//true