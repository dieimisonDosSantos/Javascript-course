const validarId = /\d+ID\b/; //d qualquer digito + 'ID' requisição da string;

console.log(validarId.test('01ID'))//true
console.log(validarId.test('JulioID'))//false
console.log(validarId.test('02121854174ID'))//true
console.log(validarId.test('ID'))//false
