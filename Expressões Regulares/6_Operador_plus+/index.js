const padrao = /Abacax?i/;

console.log('Abacaxi')
console.log(padrao.test('Abacaxi'))//true
console.log(padrao.test('Abacai'))//true
console.log(padrao.test('Abacax'))//false

const padrao2 = /\d+\w?/;//string&num

console.log('dw')
console.log(padrao2.test('123'))//true
console.log(padrao2.test('abc'))//false
console.log(padrao2.test('123abc'))//true
console.log(padrao2.test('123 abc'))//true

