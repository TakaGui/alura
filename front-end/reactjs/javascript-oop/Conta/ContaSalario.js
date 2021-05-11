import { Conta } from './Conta.js';

export class ContaSalario extends Conta {
  constructor(agencia, cliente) {
    super(0, agencia, cliente);
  }

  sacar(valor) {
    const taxa = 1.01;
    return this._sacar(valor, taxa);
  }
}