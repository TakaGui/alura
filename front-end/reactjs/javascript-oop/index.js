import { Cliente } from './Cliente.js';
import { ContaCorrente } from './ContaCorrente.js';

const cliente1 = new Cliente();
cliente1.nome = 'Taka';
cliente1.cpf = 11122233309;

const cliente2 = new Cliente();
cliente2.nome = 'Karen';
cliente2.cpf = 44455566609;


const contaCorrenteTaka = new ContaCorrente();
contaCorrenteTaka.cliente = cliente1;
contaCorrenteTaka.agencia = 1001;

const contaCorrenteKaren = new ContaCorrente();
contaCorrenteKaren.cliente = cliente2;
contaCorrenteKaren.agencia = 1001;


console.log(`saldo ${contaCorrenteTaka.cliente.nome}`, contaCorrenteTaka.saldo);

const valorDepositado = contaCorrenteTaka.depositar(500);
console.log(`valor depositado ${contaCorrenteTaka.cliente.nome}`, valorDepositado);
console.log(`saldo ${contaCorrenteTaka.cliente.nome}`, contaCorrenteTaka.saldo);

const valorSacado = contaCorrenteTaka.sacar(200);
console.log(`valor sacado ${contaCorrenteTaka.cliente.nome}`, valorSacado);

console.log(`saldo ${contaCorrenteTaka.cliente.nome}`, contaCorrenteTaka.saldo);

console.log(`conta corrente ${contaCorrenteTaka.cliente.nome}`, contaCorrenteTaka);

contaCorrenteTaka.transferir(100, contaCorrenteKaren);

console.log(`conta corrente ${contaCorrenteKaren.cliente.nome}`, contaCorrenteKaren);
console.log(`saldo ${contaCorrenteKaren.cliente.nome}`, contaCorrenteKaren.saldo);
console.log(`saldo ${contaCorrenteTaka.cliente.nome}`, contaCorrenteTaka.saldo);
