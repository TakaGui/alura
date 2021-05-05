const numerosPares = [2, 4, 6];
const numerosImpares = [1, 3, 5];

const numeros = [...numerosPares, ...numerosImpares];

console.log(numeros); // [ 2, 4, 6, 1, 3, 5]

const [num1, num2, ...outrosNumeros] = [1, 2, 3, 4, 5, 6];

console.log(num1, num2, outrosNumeros); // 1 2 [ 3, 4, 5, 6 ]

const [nomePadrao = 'Taka'] = [];
const [nomeAlterar = 'John Doe'] = ['Teste'];

console.log(nomePadrao); // Taka
console.log(nomeAlterar); // Teste

const pessoa = {
  nome: 'Taka',
  idade: 25,
};

const pessoaComTelefone = {
  ...pessoa,
  telefone: 123456789,
};

console.log(pessoaComTelefone); // { nome: 'Taka', idade: 25, telefone: 123456789 }

const { nome } = pessoa;

console.log(nome); // Taka

function imprimeDados1(dados) {
  const { nome, idade } = dados;

  console.log(nome, idade);
}

imprimeDados1(pessoa); // Taka, 25

function imprimeDados2({ nome, idade }) {
  console.log(nome, idade);
}

imprimeDados2(pessoa); // Taka, 25