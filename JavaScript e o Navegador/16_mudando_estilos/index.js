let elemento = document.querySelector('#titulo-principal');


setTimeout(function (){
    elemento.style.color = 'blue'; 
    elemento.style.backgroundColor = 'red'; 
    elemento.style.width = '400px'; 
}, 1000);//after a second it inserts the styles
