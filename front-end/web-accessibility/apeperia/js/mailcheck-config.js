var campoEmail = document.querySelector('#email');
var sugestao = document.querySelector('#sugestao');

var domains = ['gmail.com', 'uol.com', 'outlook.com'];
var secondLevelDomains = ['hotmail']
var topLevelDomains = ["com", "net", "org", 'br'];

campoEmail.addEventListener('blur', function() {
  Mailcheck.run({
    email: campoEmail.value,
    domains: domains,                       // optional
    topLevelDomains: topLevelDomains,       // optional
    secondLevelDomains: secondLevelDomains, // optional
    suggested: function(suggestion) {
      // callback code
    }
  });
});