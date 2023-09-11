let itens = document.querySelectorAll('.itens-red');//select all itens-red
console.log(itens[0].style.color)//<empty string>

itens[0].style.color = 'red'//set color red
console.log(itens[0].style.color)//red

let itens2 = document.querySelectorAll('.itens-azuis');//select all itens-red
console.log(itens2)//NodeList(3)