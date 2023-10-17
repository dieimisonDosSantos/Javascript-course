let semPares = []

let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8]

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) { // Verificar se o número é ímpar
        semPares.push(arr[i]); // Adicionar o número ímpar ao array semPares
    }

}

console.log(semPares)