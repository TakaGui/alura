class Cliente {
  nome;
  cpf;
}

class ContaCorrente {
  agencia;
  #saldo = 0;

  depositar(valor) {
    if (valor > 0) {
      this.#saldo += valor;
    }
  }

  sacar(valor) {
    if (this.#saldo >= valor) {
      this.#saldo -= valor;
    }
  }

  mostrarSaldo() {
    return this.#saldo;
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
console.log(contaCorrenteTaka.mostrarSaldo());

contaCorrenteTaka.depositar(500);
console.log(contaCorrenteTaka.mostrarSaldo());

contaCorrenteTaka.sacar(200);

console.log(contaCorrenteTaka.mostrarSaldo());

console.log(cliente1);
console.log(cliente2);
