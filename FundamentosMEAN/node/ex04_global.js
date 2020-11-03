const PI = 3.14
console.log(global.PI) // no browser estaria acessível no objeto ex04_global
// no caso do Node, estamos armazenando ela dentro de um módulo (o próprio arquivo)
// ou seja, tem a ver com o sistema de módulo do Node, que já proteje para evitar conflitos

// Armazenar diretamente no escopo global
global.obj = { name: 'Estou no global!', idade: 37 }

// "global" é equivalente ao objeto "window"
// global usa-se no Node
//  window usa-se no browser

console.log('Arquivo principal', global.obj.name)
