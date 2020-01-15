import React from 'react' // needs this import to run JSX
import ReactDOM from 'react-dom'
import PrimeiroComponente from './componentes/PrimeiroComponente'

const elemento = document.getElementById('root')
ReactDOM.render(
    <div>
        <PrimeiroComponente></PrimeiroComponente>
        <PrimeiroComponente /> {/* Outra forma de chamar a tag de um componente */}
    </div>
, elemento)















// JSX :: é uma sitaxe, parecida com HTML, que é convertido para código JS.
// Comparação de método manual vs JS:

// Exemplo para criação de uma lista com JSX
// ReactDOM.render(
//     <ul>
//         <li>Um</li>
//         <li>Dois</li>
//         <li>Três</li>
//     </ul>
//     , elemento)

// // Método para criar uma lista com elementos em JS puro:
// let lista = document.createElement('ul')

// let item = document.createElement('li')
// let texto = document.createTextNode('João')
// item.appendChild(texto)
// lista.appendChild(item)

// let item = document.createElement('li')
// let texto = document.createTextNode('Maria')
// item.appendChild(texto)
// lista.appendChild(item)

// const elemento = document.getElementById('root')
