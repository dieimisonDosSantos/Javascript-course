//const validarName = /[a-z]\-[0-9]{3,16}/ 
const validarName = /^(?=.{3,16}$)[a-z0-9-_]{3,16}/


console.log(validarName.test('dfagundes_123'))//true
console.log(validarName.test('as'))//false
console.log(validarName.test('111111111111111111111111111'))//false
