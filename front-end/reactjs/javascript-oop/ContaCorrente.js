import { Cliente } from './Cliente.js';

export class ContaCorrente {
  static numeroDeContas = 0;
  agencia;

  #cliente;
  #saldo = 0;

  constructor(agencia, cliente) {
    this.agencia = agencia;
    this.cliente = cliente;
    ContaCorrente.numeroDeContas += 1;
  }

  set cliente(novoCliente) {
    if (novoCliente instanceof Cliente) {
      this.#cliente = novoCliente;
    }
  }

  get cliente() {
    return this.#cliente;
  }

  get saldo() {
    return this.#saldo;
  }

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

  transferir(valor, conta) {
    const valorSacado = this.sacar(valor);
    conta.depositar(valorSacado);
  }
}