let novoElemento = document.createElement('p');//create p element in document
let texto = document.createTextNode('a');//insert text into let text

novoElemento.appendChild(texto)//insert in the p tag of the new element the text of the text

let elementoAlvo = document.querySelector('#titulo-principal')
let elementoPai = document.querySelector('#container-principal')

elementoPai.insertBefore(novoElemento, elementoAlvo);//insert elements with insertBefore



