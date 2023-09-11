async function somar(a, b) {
    return a + b;
}

console.log(somar(2, 3))//Promisse (5)

somar(2, 4).then(value => console.log(value))//6
somar(4, 4).then(value => console.log(value))//8