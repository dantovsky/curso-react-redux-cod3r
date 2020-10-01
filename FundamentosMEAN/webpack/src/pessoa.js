// O recurso de classe é um recurso do ECMAScript 2015.
// O padrão de módulos é o do ECMAScript.
import './modulos/moduloA'

export default class Pessoa {
    cumprimentar() {
        return 'Bom dia!'
    }
}

// Sistema de modules do CommonsJS (o Node já reconhece por padrão)
// module.exports = class Pessoa {
//     cumprimentar() {
//         return 'Bom dia!'
//     }
// }
