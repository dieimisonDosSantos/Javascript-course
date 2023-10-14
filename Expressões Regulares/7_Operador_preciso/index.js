const cep = /\d{5}-\d{3}/ //regex cep

console.log("cep")
console.log(cep.test('88117-500'))//true
console.log(cep.test('asd'))//false
console.log(cep.test('881-50'))//false
console.log(cep.test('99999-99'))//false

const tel = /\(\d{2}\)\s*\d{4,5}-\d{4}/; //regex tyel

console.log("tel")
console.log(tel.test('(51)99760-2493'))//true
console.log(tel.test('(51)9760-2493'))//true
console.log(tel.test('(51) 9760-2493'))//true
console.log(tel.test('(51) 99760-2493'))//true