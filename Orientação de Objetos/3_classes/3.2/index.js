class Cachorro {
    constructor(raca, cor){
        this.raca = raca;
        this.cor = cor;
    }

    latir() {
        console.log('Auuuuu')
    }
}

Cachorro.prototype.patas = 4;

let labrador = new Cachorro ('Labrador', 'Preto');

console.log(labrador.patas);//4
console.log(labrador.raca);//raca
labrador.latir();//Au au 
