import { Cliente } from './Cliente.js';
import { ContaCorrente } from './ContaCorrente.js';

// Taka
const contaCorrenteTaka = new ContaCorrente();

contaCorrenteTaka.cliente = new Cliente();
contaCorrenteTaka.agencia = 1001;

contaCorrenteTaka.cliente.nome = "Taka"
contaCorrenteTaka.cliente.cpf = 11122233309;

//Karen
const contaCorrenteKaren = new ContaCorrente();

contaCorrenteKaren.cliente = new Cliente();

contaCorrenteKaren.cliente.nome = "Karen"
contaCorrenteKaren.cliente.cpf = 44455566609;
contaCorrenteKaren.agencia = 102;

// Movimentações
console.log(`saldo ${contaCorrenteTaka.cliente.nome}`, contaCorrenteTaka.mostrarSaldo());

const valorDepositado = contaCorrenteTaka.depositar(500);
console.log(`valor depositado ${contaCorrenteTaka.cliente.nome}`, valorDepositado);
console.log(`saldo ${contaCorrenteTaka.cliente.nome}`, contaCorrenteTaka.mostrarSaldo());

const valorSacado = contaCorrenteTaka.sacar(200);
console.log(`valor sacado ${contaCorrenteTaka.cliente.nome}`, valorSacado);

console.log(`saldo ${contaCorrenteTaka.cliente.nome}`, contaCorrenteTaka.mostrarSaldo());

console.log(`conta corrente ${contaCorrenteTaka.cliente.nome}`, contaCorrenteTaka);

contaCorrenteTaka.transferir(100, contaCorrenteKaren);

console.log('conta corrente Karen', contaCorrenteKaren);
console.log(`saldo ${contaCorrenteKaren.cliente.nome}`, contaCorrenteKaren.mostrarSaldo());
console.log(`saldo ${contaCorrenteTaka.cliente.nome}`, contaCorrenteTaka.mostrarSaldo());
