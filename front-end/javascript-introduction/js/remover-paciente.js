var tabela = document.querySelector('#tabela-pacientes');

tabela.addEventListener('dblclick', function(event) {
  var alvoEvento = event.target;

  alvoEvento.parentNode.remove();
});
