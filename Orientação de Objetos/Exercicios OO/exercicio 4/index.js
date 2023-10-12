class Voo {
  constructor(codigoVoo, origem, destino, assentosDisponiveis) {
    this.cV = codigoVoo;
    this.og = origem;
    this.dn = destino;
    this.aD = assentosDisponiveis;
  }

  reservarAssento() {
    if (this.aD > 0) {
      this.aD--;
      console.log("Não há assentos disponíveis para reserva.");
    } else {
      console.log("Assento reservado com sucesso.");
    }
  }

  consultarAssentosDisponiveis() {
    return this.aD
  }

}

//Criação do Voo
let voo1 = new Voo(1, 'Sapucaia', 'Porto Alegre', 2);
//Verificar Assesntos Disponiveis
console.log('Assentos disponíveis:', voo1.consultarAssentosDisponiveis());//2

//Reserva de Assento
voo1.reservarAssento();
console.log('Assentos disponíveis:', voo1.consultarAssentosDisponiveis());//1

//Reserva de Assento
voo1.reservarAssento();
console.log('Assentos disponíveis:', voo1.consultarAssentosDisponiveis());//0

//Reserva de Assento
voo1.reservarAssento();
console.log('Assentos disponíveis:', voo1.consultarAssentosDisponiveis());//0

