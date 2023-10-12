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

Cachorro.prototype.raca = 'SRD';
Cachorro.prototype.patas = 4;

let labrador = new Cachorro('Labrador', 'Amarelo')

console.log(labrador.patas)//4

labrador.latir();//auuuu auuu
console.log(Cachorro.prototype.raca)//SRD

Cachorro.prototype.raca = 'ViraLata';
console.log(Cachorro.prototype.raca)//Vira-Lata
console.log(labrador.raca)//Labrador