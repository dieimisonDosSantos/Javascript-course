const notab = /[^ab]/;//negação

console.log('^ab')
console.log(notab.test('a'))//false
console.log(notab.test('b'))//false
console.log(notab.test('ababababc'))//false
console.log(notab.test('a1b2c3'))//true

const nottoaz = /[^a-z]/;//negação

console.log('^a-z')
console.log(nottoaz.test('123 a'))//true
console.log(nottoaz.test(''))//false
console.log(notab.test('asasassasfdsagwefasdasa'))//true

const az = /[a-z]/;//afirmativo

console.log('a-z')
console.log(az.test('123'))//false
console.log(az.test(' '))//false
console.log(notab.test('asasassasfdsagwefasdasa'))//true
console.log(notab.test('1a'))//true