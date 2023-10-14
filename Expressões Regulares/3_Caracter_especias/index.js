let pontoRegex = /./;
//Qualquer digito ou caractere

console.log('.')
console.log(pontoRegex.test('asd'))//true
console.log(pontoRegex.test(' '))//true
console.log(pontoRegex.test('123'))//true
console.log(pontoRegex.test('asd123'))//true

//===================================================//
let dRegex = /\d/;// [0-9]
//qualquer string que contenha numbers

console.log('d')
console.log(dRegex.test('asd'))//false
console.log(dRegex.test(' '))//false
console.log(dRegex.test('123'))//true
console.log(dRegex.test('asd123'))//true

//===================================================//
let dRegex2 = /\D/;// [^0-9]
//Qualquer string que contenha letras ou somente espaço

console.log('D')
console.log(dRegex2.test('asd'))//true
console.log(dRegex2.test(' '))//true
console.log(dRegex2.test('123'))//false
console.log(dRegex2.test('asd123'))//true

//===================================================//
let sRegex = /\s/;
//Espaços vazios, quebras de linhas e tabs

console.log('s')
console.log(sRegex.test('asd'))//false
console.log(sRegex.test(' '))//true
console.log(sRegex.test('123'))//false
console.log(sRegex.test('asd123'))//false

//===================================================//
let wRegex = /\w/;
//alfa numericos (numeros e letras)

console.log('w')
console.log(wRegex.test('asd'))//true
console.log(wRegex.test(' '))//false
console.log(wRegex.test('123'))//true
console.log(wRegex.test('asd123'))//true