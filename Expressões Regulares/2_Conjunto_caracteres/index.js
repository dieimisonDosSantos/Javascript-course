let reg1 = /[12345]/

console.log(reg1.test('Temos o numero 6'))//false
console.log(reg1.test('Temos o numero 4'))//true
console.log(reg1.test('Temos o numero 53'))//true
console.log(reg1.test('Temos o numero 60'))//false

//===============================================//
let reg2 = /[0-9]/

console.log(reg2.test('Temos o numero 10'))//true
console.log(reg2.test('Temos o numero'))//false