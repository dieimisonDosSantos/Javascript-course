let dia = /\d\d/;//strin&num

console.log('d')
console.log(dia.test("2019") && '2019'.length == 4)//true 
console.log(dia.test("asd"))//false
console.log(dia.test("05") && '05'.length == 2)//true
console.log(dia.test("asd1"))//false

let palavrasPeloMenosTresLetras = /\w\w\w/;//string&num/letters

console.log('w')
console.log(palavrasPeloMenosTresLetras.test('asd'))//true
console.log(palavrasPeloMenosTresLetras.test('as dd'))//false
console.log(palavrasPeloMenosTresLetras.test('as1'))//true
console.log(palavrasPeloMenosTresLetras.test('123'))//true
console.log(palavrasPeloMenosTresLetras.test('1 11'))//false
console.log(palavrasPeloMenosTresLetras.test('qw 11'))//false
