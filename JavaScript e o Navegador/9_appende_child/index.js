let novoElemento = document.createElement('p');//insert p tag for newElement
let texto = document.createTextNode('Algum texto');//insert text into let text

novoElemento.appendChild(texto)//insert in the p tag of the new element the text of the text
let p = document.querySelector('#paragrafo-principal');
let pai = p.parentNode//insert div around const p

pai.appendChild(novoElemento)//insert text for p tag(new element)
