import { Cliente } from './Cliente.js';
import { Conta } from './Conta.js';

export class ContaCorrente extends Conta {
  static numeroDeContas = 0;

  constructor(agencia, cliente) {
    super(0, agencia, cliente);

    ContaCorrente.numeroDeContas += 1;
  }
}