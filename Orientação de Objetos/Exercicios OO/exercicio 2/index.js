class Retangulo {
    constructor(largura, altura) {
        this.x = largura;
        this.y = altura;
    }

    calcularArea() {
        //retorna largura * altura
        return this.x * this.y;
    }

    calcularPerimetro() {
        //retorna o valor de largura e altura * 2
        return 2 * (this.x + this.y);
    }
}

let retangulo = new Retangulo(20, 2);
console.log(retangulo.calcularArea()); // Saída: 40
console.log(retangulo.calcularPerimetro()); // Saída: 44