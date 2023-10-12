class Conta {
    constructor(saldoCC, saldoCP, juros) {//ContaCorrente //ContaPoupança
        this.saldoCC = saldoCC;
        this.saldoCP = saldoCP;
        this.juros = juros;
    }

    deposito(valor) {// deposito em conta CC
        this.saldoCC += valor;
    }

    saque(valor) {// saque em conta CC
        this.saldoCC -= valor;
    }

    transferenciaCP(valor) {// transferencia de conta CC para CP
        this.saldoCC -= valor;
        this.saldoCP += valor;
    }

    transferenciaCC(valor) {// transferencia de conta CP para CC
        this.saldoCP -= valor;
        this.saldoCC += valor;
    }

    jurosDeAniversario() {
        let juros = (this.saldoCP * this.juros) / 100

        this.saldoCP += juros;
    }
}

class ContaEspecial extends Conta {
    constructor(saldoCC, saldoCP, juros) {
        super(saldoCC, saldoCP, juros * 2)
    }
}

let conta = new Conta(1000, 5000, 1)//instanciando obj
console.log(conta)

//saque/deposito
conta.saque(100)
console.log(conta)//CC = 900

conta.deposito(100)
console.log(conta)//CC = 1000

//transfer
conta.transferenciaCC(100)//+CC //-CP = 4900
console.log(conta)//CC = 1100

conta.transferenciaCP(100)//+CP //-CC = 1000
console.log(conta)//CP = 5000

//juros
conta.jurosDeAniversario()
console.log(conta)//1% de 5000 = +CP 50

//Conta Especial
let conta2 = new ContaEspecial(1000, 50000, 1);
console.log(conta2)

conta2.saque(500)//-CC = 500
console.log(conta2)

conta2.jurosDeAniversario()
console.log(conta2)//+CP //2% d/Juros = 1000
