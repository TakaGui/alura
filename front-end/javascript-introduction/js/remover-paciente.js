var tabela = document.querySelector('#tabela-pacientes');

tabela.addEventListener('dblclick', function(event) {
  var alvoEvento = event.target;
  var alvoPai = alvoEvento.parentNode;

  alvoPai.classList.add('fadeOut');

  setTimeout(function() {
    alvoPai.remove();
  }, 500)
});
