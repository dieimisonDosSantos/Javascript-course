//CLASSES CONSTRUTOR COM MÉTODO
class Cachorro {
    constructor(raca, cor) {
        this.raca = raca;
        this.cor = cor
    }

    latir() {
        console.log("auuuu auuuu")
    }
}

Cachorro.prototype.patas = 4;

let labrador = new Cachorro('Labrador', 'Amarelo')

console.log(labrador.patas)//4

labrador.latir();//auuuu auuu