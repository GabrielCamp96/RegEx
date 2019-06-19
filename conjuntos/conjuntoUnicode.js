const texto = 'áéíóú àèìòù âêîôû ç ãẽĩõũ ü'

const regexAcento = /[\u00C0-\u00FC]/g // seleciona todas letras acentuadas

console.log(texto.match(regexAcento))