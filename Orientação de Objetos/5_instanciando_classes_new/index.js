//INSTANCE BY FUNCTION FOR NEW CLASS
function Cachorro(raca, patas, cor) {
    this.raca = raca;
    this.patas = patas;
    this.cor = cor;
    this.uivar = function () {
        console.log('Auuu')
    }
}

let husky = new Cachorro('Husky', 4, 'cinza')//Create a new dog

husky.uivar();//Auuu
husky.cor = 'green'//change dog ownership

console.log(husky)//object