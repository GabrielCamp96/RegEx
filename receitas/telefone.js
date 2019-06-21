const texto = `
Lista telefonica:
    - (21) 12345-6709
    - (11) 92380-2234
    - 5679-7771
    - (85)3333-7890
    - (1) 4321-1234
`

console.log(texto.match(/(\(\d{2}\)\s?)?\d{4,5}-\d{4}/g))