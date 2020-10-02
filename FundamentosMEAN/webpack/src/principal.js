// const Pessoa = require('./pessoa') // Sistema de modules do CommonsJS
import Pessoa from './pessoa' // Forma de importar padrão do ECMAScript
import './assets'

const atendente = new Pessoa
console.log(atendente.cumprimentar())