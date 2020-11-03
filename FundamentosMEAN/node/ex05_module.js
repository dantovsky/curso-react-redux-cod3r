// Para onde aponta o "this" dentro de um módulo do Node?

// --- Comparações para descobrir para onde o this aponta:

console.log('\nO global referencia o this?')
console.log(global === this) // o this não aponta para o global

console.log('\nO próprio módulo referencia o this?')
console.log(module === this) // falso, o this também não aponta para o module

console.log('\nO module.exports referencia o this?')
console.log(module.exports === this) // true, o this aponta para o module.exports

// module.exports é o objeto que vai ser exporto para outros módulos
// inicialmente ele é vazio

// Será que se pendurarmos alguma funcionalidade na instância do this, vamos
// conseguir exportar esse objeto/função para fora do módulo?

this.digaOi = function() {
  console.log('Oii!!!')
}

this.digaOla = function() {
  console.log('Olá!!!')
}
