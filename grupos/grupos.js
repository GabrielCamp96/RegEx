const texto1 = 'O José Simão é muito engraçado... hehehehehe'
console.log(texto1.match(/(he)+/g))

const texto2 = 'http://www.site.info www.escola.ninja.br google.com.br'

console.log(texto2.match(/(http:\/\/)?(www\.)?[\w-]+\.(\w+\.)?\w+/g)) // minha Regex
console.log(texto2.match(/(http:\/\/)?(www\.)?\w+\.\w{2,}(\.\w{2})?/g)) // implementação cod3r