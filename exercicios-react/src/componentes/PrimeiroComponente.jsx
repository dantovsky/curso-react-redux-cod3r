import React from 'react'

let isLegal = true

// Passagem de parâmetros (props)
export default (props) =>
    <div>
        <h1>{props.valor} - {props.aBcD} - {props.exressao}</h1>
        <p>Legal: {isLegal ? 'Sim' : 'Não'}</p>
        <p>Random num: {Math.random()}</p>
    </div>

// // Função anônima utilizando Arrow Function (otimizado)::
// export default () =>
//     <h1>Primeiro Componente!</h1>
    
// Função anônima utilizando Arrow Function ::
// export default () => {
//     return <h1>Primeiro Componente!</h1>
// }

// Função anônima :: Só é possível retornar funcao anonima utilizando o "default"
// export default function () {
//     return <h1>Primeiro Componente!</h1>
// }

// Função nominal ::
// function primeiro() {
//     return <h1>Primeiro Componente!</h1>
// }

// export default primeiro