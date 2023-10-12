//CLASSES CONSTRUTOR COM MÉTODO
class Cachorro {
    constructor(raca, patas, cor) {
        this.raca = raca;
        this.patas = patas;
        this.cor = cor
    }
}

let labrador = new Cachorro('Labrador', 4, 'Caramelo')

console.log(labrador)//object

let pitbull = new Cachorro('Pitbull', 4, 'Esfomeado')

console.log(pitbull)//object
console.log(labrador.patas)//4