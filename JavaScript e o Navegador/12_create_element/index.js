let lista = document.createElement('ul');//creating element ul

for (let i = 0; i < 5; i++) {
    let itens = document.createElement('li')//creating element li
    let texto = document.createTextNode("texto lista " + i)//creating element of text

    itens.appendChild(texto);//assigning text to the items(li) element
    lista.appendChild(itens)//assigning tag ul to the items(li) element
}

let container = document.getElementById('container-principal')//select ID
container.appendChild(lista)//adding list to container