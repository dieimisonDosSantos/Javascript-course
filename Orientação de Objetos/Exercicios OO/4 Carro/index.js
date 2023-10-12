class Carro {
    constructor(marca, cor, gasolinaRestante, consumo) {
        this.marca = marca
        this.cor = cor
        this.gasolinaRestante = gasolinaRestante
        this.consumo = consumo
    }
    dirigir(km) {
        let litrosConsumidos = km / this.consumo;

        this.gasolinaRestante -= litrosConsumidos;
    }

    abastecer(l) {
        this.gasolinaRestante += l;
    }

}

let carro = new Carro('VW', 'Cinza', 100, 14)

console.log(carro)//restante gasolina 100

carro.dirigir(11);

console.log(carro)//restante gasolina 99

carro.abastecer(1)

console.log(carro)//restante gasolina 100...