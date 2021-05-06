import { Cliente } from './Cliente.js';
import { ContaCorrente } from './ContaCorrente.js';
import { ContaPoupanca } from './ContaPoupanca.js';

const cliente1 = new Cliente('Taka', 11122233309);
const cliente2 = new Cliente('Karen', 44455566609);

const agencia = 1001;

const contaCorrenteTaka = new ContaCorrente(agencia, cliente1);
const contaCorrenteKaren = new ContaCorrente(agencia, cliente2);

console.log(`saldo ${contaCorrenteTaka.cliente.nome}`, contaCorrenteTaka.saldo);

const valorDepositado = contaCorrenteTaka.depositar(500);
console.log(`valor depositado ${contaCorrenteTaka.cliente.nome}`, valorDepositado);
console.log(`saldo ${contaCorrenteTaka.cliente.nome}`, contaCorrenteTaka.saldo);

const valorSacado = contaCorrenteTaka.sacar(200);
console.log(`valor sacado ${contaCorrenteTaka.cliente.nome}`, valorSacado);

console.log(`saldo ${contaCorrenteTaka.cliente.nome}`, contaCorrenteTaka.saldo);
console.log(`saldo ${contaCorrenteKaren.cliente.nome}`, contaCorrenteKaren.saldo);

console.log('transferência inicio');
contaCorrenteTaka.transferir(200, contaCorrenteKaren);
console.log('transferência fim');

console.log(`saldo ${contaCorrenteTaka.cliente.nome}`, contaCorrenteTaka.saldo);
console.log(`saldo ${contaCorrenteKaren.cliente.nome}`, contaCorrenteKaren.saldo);

console.log('Número de contas cadastradas', ContaCorrente.numeroDeContas);

const contaPoupanca = new ContaPoupanca(50, agencia, cliente1);
