function classificarNumero(numero) {
    if (numero > 0) {
        if (numero % 2 === 0) {
            return "Positivo e Par";
        } else {
            return "Positivo e Ímpar";
        }
    } else if (numero < 0) {
        return "Negativo";
    } else {
        return "Neutro";
    }
}

console.log(classificarNumero(4));  //Positivo e Par
console.log(classificarNumero(7));  //Positivo e Ímpar
console.log(classificarNumero(-3)); //Negativo
console.log(classificarNumero(0));  //Neutro