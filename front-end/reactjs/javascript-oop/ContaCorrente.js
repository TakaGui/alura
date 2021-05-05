export class ContaCorrente {
  cliente;
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

  transferir(valor, conta) {
    const valorSacado = this.sacar(valor);
    conta.depositar(valorSacado);
  }
}