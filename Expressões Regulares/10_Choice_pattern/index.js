const reg = /\w+:\s+|(Matheus|Sereio|Mario)/ //Nome: Ludmilo'

console.log(reg.test('Nome: Matheus'))//true
console.log(reg.test('Nome:Sereio'))//true
console.log(reg.test('Nome:    Mario'))//true
console.log(reg.test('Nome: '))//true