export class ContaCorrente {
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