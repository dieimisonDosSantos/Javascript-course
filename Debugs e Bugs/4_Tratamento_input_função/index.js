function checarNumero(num) {
  let number = Number(num);
  if (Number.isNaN(number)) {
    alert('Por favor, passe só os números para o programa');
  } else {
    return checarNumero(number);
  }
}

let number = prompt('Digite um numero')

checarNumero(number)