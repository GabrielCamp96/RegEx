// . Um caractere qualquer
// [] Conjunto de caracteres permitidos
// [^] Conjunto de caracteres proibidos
// ? Zero ou um
// * Zero ou mais
// + Um ou mais
// {n, m} De n até m
// ^ Início de linha
// $ Fim de linha
// \b Início ou fim de palavra
// \ Uso de metacaracteres com literal
// | Operação OU
// ( ) Define um grupo
// \1 ... \1 Resgata grupos já definidos (Retrovisor)

const texto = '1,2,3,4,5,6,a.b c!d?e'
const regexPonto = /\./g
console.log(texto.split(regexPonto))

const regexSimbolos = /,|\.|\?|!| /g
console.log(texto.split(regexSimbolos))