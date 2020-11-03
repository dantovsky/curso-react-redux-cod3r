// Correndo código no Node
const ola = () => console.log('Ola node!')
setInterval(ola, 1000)

const a = true
if (a) {
  var b = 'ola' // variável definida para o escopo global
  let c = 'oi'  // variável definida para o escopo local
}

console.log(b);
console.log(c);
