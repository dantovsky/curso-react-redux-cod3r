// Uso de módulos externos ou do core do Node

const _ = require('lodash')

// Como o lodash não é um módulo do core do Node, precisamos instalar pelo
// console utilizando o npm (Node Package Manager):
// -> npm install lodash

const alunos = [{
  nome: 'Joao',
  nota: 7.6
}, {
  nome: 'Maria',
  nota: 8.6
}, {
  nome: 'Pedro',
  nota: 8.1
}]

// Vamos usar o Lodash para percorrer os alunos, extrair a nota e calcular a média
const media = _.sumBy(alunos, 'nota') / alunos.length
console.log('Média', media)

// -------------------------------------------------
// package.json
// -------------------------------------------------

// package.json => arquivo descritor onde colocamos a declaração das dependências
// que o projeto necessita, assim, quando em outro momento quando formos usar a
// app, mesmo que não exista a pasta das dependências (node_modules), basta
// fazer "npm install" para que este arquivo seja lido e seja instalado automaticamente
// todas essas dependências.

// Criação do package.json
// Rodar o comando "npm init" ou "npm init -y" (responde yes automaticamente para
// todas as perguntas)

// Ao instalarmos um novo pacote, podemos usar o comando "--save" para que a
// dependência seja adicionada no arquivo package.json
