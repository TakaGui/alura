import { Cliente } from './Cliente.js';

import { ContaCorrente } from './Conta/ContaCorrente.js';
import { ContaPoupanca } from './Conta/ContaPoupanca.js';
import { ContaSalario } from './Conta/ContaSalario.js';

import { Gerente } from './Funcionario/Gerente.js';
import { Diretor } from './Funcionario/Diretor.js';

import { SistemaAutenticacao } from './SistemaAutenticacao.js';

const cliente1 = new Cliente('Taka', 11122233309, '123456');
const cliente2 = new Cliente('Karen', 44455566609, '123456');

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
const contaSalario = new ContaSalario(agencia, cliente1);

contaSalario.depositar(100);
contaSalario.sacar(10);

console.log('conta salario', contaSalario);

const gerente = new Gerente('Guilherme', 5000, 12345678900);
const diretor = new Diretor('Karen', 10000, 98765432100);

diretor.cadastrarSenha('123456789');

const gerenteEstaLogado = SistemaAutenticacao.login(gerente, '123456789');
const diretorEstaLogado = SistemaAutenticacao.login(diretor, '123456789');
const cliente1EstaLogado = SistemaAutenticacao.login(cliente1, '123456');

console.log('gerente logado', gerenteEstaLogado);
console.log('diretor logado', diretorEstaLogado);
console.log('cliente1 logado', cliente1EstaLogado);
