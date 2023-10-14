const validarDominio = /(www\.)?\w+\.com\.br|\.com/;

console.log(validarDominio.test('www.google.com'))//true
console.log(validarDominio.test('www.horaDeCodar.com.br'))//true
console.log(validarDominio.test('frontEnd.com.br'))//true
console.log(validarDominio.test('com.org'))//false
