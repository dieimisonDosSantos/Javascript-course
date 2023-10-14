const validarDatas = /[0-31]{2}[/][0-12]{2}[/][0-9]{4}/;

console.log(validarDatas.test('31/12/2999'))//true
console.log(validarDatas.test('1/1/2005'))//false
console.log(validarDatas.test('01/12/3000'))//true
console.log(validarDatas.test(''))//true