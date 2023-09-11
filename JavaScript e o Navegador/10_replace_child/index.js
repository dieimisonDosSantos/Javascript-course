let novoElemento = document.createElement('p');//create p element
let texto = document.createTextNode('Algum texto');//insert text for texto

novoElemento.appendChild(texto)//insert text for p tag(new element)

let heading = document.querySelector('#titulo-principal');//select ID
let paiHeading = heading.parentNode;

paiHeading.replaceChild(novoElemento, heading)//passa a sair de h1 para p