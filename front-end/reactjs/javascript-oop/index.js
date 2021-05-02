class Cliente {
  nome;
  cpf;
}

class ContaCorrente {
  agencia;
  saldo;

  sacar(valor) {
    if (this.saldo >= valor) {
      this.saldo -= valor;
    }
  }
}

const cliente1 = new Cliente();

cliente1.nome = 'Taka';
cliente1.cpf = 11122233309;

const cliente2 = new Cliente();

cliente2.nome = 'Karen';
cliente2.cpf = 44455566609;

const contaCorrenteTaka = new ContaCorrente();

contaCorrenteTaka.agencia = 1001;
contaCorrenteTaka.saldo = 0;
console.log(contaCorrenteTaka.saldo);

// depósito
contaCorrenteTaka.saldo = 100;
console.log(contaCorrenteTaka.saldo);

contaCorrenteTaka.sacar(200);

console.log(contaCorrenteTaka.saldo);

console.log(cliente1);
console.log(cliente2);
