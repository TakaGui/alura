var titulo = document.querySelector('.titulo');
var pacientes = document.querySelectorAll('.paciente');

titulo.textContent = "Aparecida Nutricionista";

pacientes.forEach(paciente => {
  var tdPeso = paciente.querySelector('.info-peso');
  var peso = tdPeso.textContent;
  
  var tdAltura = paciente.querySelector('.info-altura');
  var altura = tdAltura.textContent;
  
  var tdImc = paciente.querySelector('.info-imc');
  
  var pesoValido = true;
  var alturaValida = true;
  
  if ((peso <= 0) || (peso >= 1000)) {
    pesoValido = false;
    tdImc.textContent = 'Peso inválido';
    paciente.classList.add('paciente-invalido');
  }
  
  if ((altura <= 0) || (altura >= 3.00)) {
    alturaValida = false;
    tdImc.textContent = 'Altura inválida';
    paciente.classList.add('paciente-invalido');
  }
  
  if (pesoValido && alturaValida) {
    var imc = peso / (altura * altura);
  
    tdImc.textContent = imc.toFixed(2);
  }
});

var botaoAdicionarPaciente = document.querySelector('#adicionar-paciente');
botaoAdicionarPaciente.addEventListener('click', function (event) {
  event.preventDefault();
  
  var form = document.querySelector('#form-adiciona');

  var nome = form.nome.value;
  var peso = form.nome.value;
  var altura = form.altura.value;
  var gordura = form.gordura.value;

  var pacienteTr = document.createElement('tr');

  var nomeTd = document.createElement('td');
  var pesoTd = document.createElement('td');
  var alturaTd = document.createElement('td');
  var gorduraTd = document.createElement('td');
  var imcTd = document.createElement('td');

  nomeTd.textContent = nome;
  pesoTd.textContent = peso;
  alturaTd.textContent = altura;
  gorduraTd.textContent = gordura;

  pacienteTr.appendChild(nomeTd);
  pacienteTr.appendChild(pesoTd);
  pacienteTr.appendChild(alturaTd);
  pacienteTr.appendChild(gorduraTd);

  var tabela = document.querySelector('#tabela-pacientes');

  tabela.appendChild(pacienteTr);
});
