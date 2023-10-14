const letrasM = /[A-Z]/ //Somente letras Mai;

console.log(letrasM.test('123'))//false
console.log(letrasM.test('OSGURI'))//true
console.log(letrasM.test('osguri'))//false