const texto = '.$+*?-'

console.log(texto.match(/[+?.$*]/g))
console.log(texto.match(/[+?.$*]./g)) // não precisa de espace dentro do conjunto
console.log(texto.match(/[$-?]/g)) // intervalo válido

// NÃO é um intervalo (range) ...

console.log(texto.match(/[$\-?]/g))
console.log(texto.match(/[-?]/g))

// podem precisar de escape dentro do conjunto: - [ ] ^