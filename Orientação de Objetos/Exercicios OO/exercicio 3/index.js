class ContaBancaria {
  constructor(numeroC, saldo) {
    this.numeroConta = numeroC;
    this.saldo = saldo;
  }

  //métodos
  depositar(valor) {
    this.saldo += valor; // Adiciona o valor ao saldo
  }

  sacar(valor) {
    if (valor <= this.saldo) {
      this.saldo -= valor; // Subtrai o valor do saldo se houver saldo suficiente
    } else {
      console.log('Seu saldo é insuficiente para fazer o saque');
    }
  }

  consultarSaldo() {
    return this.saldo; // Retorna o saldo atual da conta
  }
}

let conta1 = new ContaBancaria(1, 1000);
console.log(conta1); // { numeroConta: 1, saldo: 1000 }

conta1.depositar(1000);
console.log(conta1.consultarSaldo()); // Saída: 2000

conta1.sacar(500);
console.log(conta1.consultarSaldo()); // Saída: 1500

conta1.sacar(2000); // Mostrará a mensagem: "Seu saldo é insuficiente para fazer o saque"
console.log(conta1.consultarSaldo()); // Saída: 1500 (o saldo não foi alterado)