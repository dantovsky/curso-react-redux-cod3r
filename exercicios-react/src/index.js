import React from 'react' // needs this import to run JSX
import ReactDOM from 'react-dom'
import PrimeiroComponente from './componentes/PrimeiroComponente'
import {CompA, CompB as ComponenteB} from './componentes/DoisComponentes'
import MultiElementos from './componentes/MultiElementos'
import FamiliaSilva from './componentes/FamiliaSilva' // O componente, por sua vez, irá importar por consequencia o componente Membro

// Aula 19. Realção entre componentes #02
import Familia from './componentes/Familia'
import Membro from './componentes/Membro' // vai ser instanciado aqui no index.js

// Aula 23 - Adicionando funcao em componente funcional
import ComponenteComFuncao from './componentes/ComponenteComFuncao'

// Aula 24 - Comunicacao indireta entre componentes
import Pai from './componentes/Pai'

// Aula 25 - Componente de Classe
import ComponenteClasse from './componentes/ComponenteClasse'

// Aula 25 - Componente de Classe Contador
import Contador from './componentes/Contador'

// Aua 31 - Hooks
import Hook from './componentes/Hook'

const elemento = document.getElementById('root')
ReactDOM.render(
    <div>

        <h3>Aua 31 - Hooks</h3>
        <Hook />
        
        <hr />
        
        <h3>Aula 25 - Componente de Classe Contador</h3>
        <Contador numeroInicial={10} />

        <hr />
        
        <h3>Aula 25 - Componente de Classe</h3>
        <ComponenteClasse valor="Sou um componente de classe!" />

        <hr />

        <h3>Aula 24 - Comunicacao indireta entre componentes</h3>
        <Pai />

        <hr />

        <h3>Aula 23 - Adicionando funcao em componente funcional</h3>
        <ComponenteComFuncao />

        <hr />

        {/* (Primeiros exercícios) <p>Exibição do conteúdo dos componentes (isto é um comentário)</p> */}
        <h3>PrimeiroComponente</h3>
        <PrimeiroComponente valor="Olá Portugal!"></PrimeiroComponente>
        <PrimeiroComponente valor="Olá Brasil!" aBcD={123} expressao={Math.pow(2, 8)}/> {/* Outra forma de chamar a tag de um componente */}

        <hr />

        <h3>DoisComponentes :: CompA, CompB</h3>
        <CompA valor="Olá, eu sou A!" />
        <ComponenteB valor="B na área!" />

        <hr />

        <h3>Múltiplos Elementos</h3>
        <MultiElementos />

        <hr />

        <h3>Realção entre componentes #01</h3>
        <FamiliaSilva />

        <hr />

        <h3>Realção entre componentes #02</h3>
        {/* <Familia>
            <Membro nome="Andre" sobrenome="Pereira" />
            <Membro nome="Mariana" sobrenome="Pereira" />
        </Familia>

        <Familia>
            <Membro nome="Bia" sobrenome="Aruda" />
            <Membro nome="Gustavo" sobrenome="Aruda" />
        </Familia> */}

        <hr />

        <h3>Comunicação direta entre componentes</h3>
        <FamiliaSilva sobrenome="Silva Pereira">
            <Membro nome="Bia" />
            <Membro nome="Gustavo" />
        </FamiliaSilva>

        <hr />

        <h3>Aula 21. Propagando "props" para componentes filhos #0</h3>
        <Familia sobrenome="Pereira">
            <Membro nome="Andre" />
            <Membro nome="Dante" />
            <Membro nome="Diana" />
        </Familia>
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
