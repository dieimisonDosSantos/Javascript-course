class Endereço {//Construção de Sistema
    constructor(rua, bairro, cidade, estado) {
        this.rua = rua;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
    }

    set novaRua(novaRua) {//metodo para alteração de dado 'rua'
        this.rua = novaRua
    }

    set novoBairro(novoBairro) {//metodo para alteração de dado 'Bairro'
        this.bairro = novoBairro
    }

    set novaCidade(novaCidade) {//metodo para alteração de dado 'Cidade'
        this.cidade = novaCidade
    }

    set novoEstado(novoEstado) {//metodo para alteração de dado 'Estado'
        this.estado = novoEstado
    }

}

let endereço = new Endereço('Netflixo Silveira Cruz', 'Tilápio', 'Globelezo', 'RS') //endereço setado

console.log(endereço) // demonstração de endereço

endereço.novaRua = 'Calabrezo Cabroso';

endereço.novoBairro = 'Invasão';

endereço.novaCidade = 'Nova Sapucaia';

endereço.novoEstado = 'Santa Catarina';

console.log(endereço) // demonstração de endereço