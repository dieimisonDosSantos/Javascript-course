//MÉTODOS NO PROTOTYPE
function Cachorro(raca, patas, cor) {
    this.raca = raca;
    this.patas = patas;
    this.cor = cor;
}

Cachorro.prototype.uivar = function () {
    console.log('AUuuuuu AUuuuuu')
}

Cachorro.prototype.latir = function () {
    console.log('AU AU AU AU AU')
}

let husky = new Cachorro('Husky', 4, 'Branco')

console.log(husky);//object
husky.uivar();//AUuuuuu AUuuuuu
husky.latir();//AU AU AU AU AU