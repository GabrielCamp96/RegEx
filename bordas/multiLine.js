const texto = `
Leo é muito legal
Emanuel foi jogar em Sergipe
Bianca é casa com Habib
`

console.log(texto.match(/\n/g))
console.log(texto.match(/^(.).+\1$/g))
console.log(texto.match(/^(.).+\1$/gim))