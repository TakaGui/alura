var botaoAdicionarPaciente = document.querySelector('#adicionar-paciente');

botaoAdicionarPaciente.addEventListener('click', function (event) {
  event.preventDefault();
  
  var form = document.querySelector('#form-adiciona');

  var paciente = obtemPacienteDoFormulario(form);

  var pacienteTr = document.createElement('tr');

  var nomeTd    = document.createElement('td');
  var pesoTd    = document.createElement('td');
  var alturaTd  = document.createElement('td');
  var gorduraTd = document.createElement('td');
  var imcTd     = document.createElement('td');

  nomeTd.textContent    = paciente.nome;
  pesoTd.textContent    = paciente.peso;
  alturaTd.textContent  = paciente.altura;
  gorduraTd.textContent = paciente.gordura;
  imcTd.textContent     = calculaImc(paciente.peso, paciente.altura);

  pacienteTr.appendChild(nomeTd);
  pacienteTr.appendChild(pesoTd);
  pacienteTr.appendChild(alturaTd);
  pacienteTr.appendChild(gorduraTd);
  pacienteTr.appendChild(imcTd);

  var tabela = document.querySelector('#tabela-pacientes');

  tabela.appendChild(pacienteTr);
});

function obtemPacienteDoFormulario(form) {
  var paciente = {
    nome    : form.nome.value,
    peso    : form.peso.value,
    altura  : form.altura.value,
    gordura : form.gordura.value,
    imc     : calculaImc(peso, altura),
  };

  return paciente;
}