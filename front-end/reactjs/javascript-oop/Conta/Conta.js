import { Cliente } from '../Cliente.js';

export class Conta {
  _saldo;
  #agencia;
  #cliente;

  constructor(saldoInicial, agencia, cliente) {
    if (this.constructor === Conta) {
      throw new Error(
        'Você não deveria instanciar um objeto do tipo Conta diretamente'
      );
    }

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
    throw new Error('O método Sacar da conta é abstrato');
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