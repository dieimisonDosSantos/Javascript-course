//INSTANCE BY FUNCTION
function criaCachorro(raca, patas, cor, nome) {
    let cachorro = Object.create({});
    cachorro.raca = raca;
    cachorro.patas = patas;
    cachorro.cor = cor;
    cachorro.nome = nome
    return cachorro;
}

let doberman = criaCachorro('Doberman', 4, 'Preto', 'Lagartixo');

console.log(doberman)//object