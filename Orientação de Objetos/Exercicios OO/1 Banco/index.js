class Conta { //criar conta do sistema
    constructor(saldo) {
        this.saldo = saldo
    }

    deposito(valor) {
        this.saldo += valor
    }//Depósito de valor para saldo 

    Saque(valor) {
        this.saldo -= valor;
    }//Saque de saldo retornando valor
}

let conta = new Conta(1000) //instanciando criando conta

console.log(conta) //1000

conta.deposito(100)//+100
console.log(conta)//1100

conta.Saque(100)//-100
console.log(conta)//1000