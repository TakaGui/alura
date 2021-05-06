import { Cliente } from './Cliente.js';
export class Conta {
  _saldo;
  #agencia;
  #cliente;

  constructor(saldoInicial, agencia, cliente) {
    this._saldo = saldoInicial;
    this.#agencia = agencia;
    this.#cliente = cliente;
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
    return this._saldo;
  }

  get agencia() {
    return this.#agencia;
  }

  depositar(valor) {
    if (valor <= 0) {
      return 0;
    }

    this._saldo += valor;

    return valor;
  }

  sacar(valor) {
    let taxa = 1;

    return this._sacar(valor, taxa);
  }

  _sacar(valor, taxa) {
    const valorSacado = taxa * valor;

    if (this._saldo <= valorSacado) {
      return 0;
    }

    this._saldo -= valorSacado;

    return valorSacado;
  }

  transferir(valor, conta) {
    const valorSacado = this.sacar(valor);
    conta.depositar(valorSacado);
  }
}