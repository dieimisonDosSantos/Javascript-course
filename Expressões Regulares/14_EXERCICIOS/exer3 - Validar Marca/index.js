const validarMarca = /Marca:\s+(Nike|Adidas|Puma|Asics)/

console.log(validarMarca.test('Marca: Nike'))//true
console.log(validarMarca.test('Marca: asd'))//false
console.log(validarMarca.test('Marca: Adidas'))//true
console.log(validarMarca.test('Marca: '))//false
console.log(validarMarca.test('Marca: 123456a'))//false
console.log(validarMarca.test('Marca:      Nike'))//true
console.log(validarMarca.test('Marca:Nike'))//false
