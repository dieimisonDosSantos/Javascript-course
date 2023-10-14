const validarEmail = /\w+@\w+\.\w+/;

console.log(validarEmail.test('seuJeitoDeSer@gmail.com'))//true
console.log(validarEmail.test('a@a.com'))//true
console.log(validarEmail.test('dieimisonfagundes@.com'))//false
console.log(validarEmail.test('aa@aaa.com.br'))//true