/*

Quando importamos um módulo, ou seja, usamos a função require() e atribuímos
a uma var, por padrão, isto é um "singleton", é um objeto que tem uma única
instância e esse objeto é compartilhado com sempre quem pedir esse mesmo módulo.

(!) Cuidado na hora de guardar estado nos módulos, para não cair na ideia
de que estamos sempre retornando um objeto novo. Na verdade é um singleton
que está sendo devolvido e está todo mundo usando esse mesmo objeto. Existem
formas de criar um novo objeto.

*/

let numero = 1

function exibirProximo() {
  console.log(numero++)
}

module.exports = { exibirProximo }
