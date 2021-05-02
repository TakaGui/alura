class Cliente {
  nome;
  cpf;
}

class ContaCorrente {
  agencia;
  #saldo = 0;

  depositar(valor) {
    if (valor <= 0) {
      return;
    }

    this.#saldo += valor;

    return valor;
  }

  sacar(valor) {
    if (this.#saldo <= valor) {
      return
    }

    this.#saldo -= valor;

    return valor;
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
console.log('saldo', contaCorrenteTaka.mostrarSaldo());

const valorDepositado = contaCorrenteTaka.depositar(500);
console.log('valor depositado', valorDepositado);
console.log('saldo', contaCorrenteTaka.mostrarSaldo());

const valorSacado = contaCorrenteTaka.sacar(200);
console.log('valor sacado', valorSacado);

console.log('saldo', contaCorrenteTaka.mostrarSaldo());
