import React from 'react'

export default function Fragmento(props) {
    return (
        <>
            <h2>Fragmento</h2>
            <p>Cuidado com esse erro</p>
        </>
    )
}

/*
-------------------------------------------------------
Aula 15 - React.Fragment: Retornar elementos adjacentes
-------------------------------------------------------
Soluções para retornar múltiplos elementos adjacentes (um ao lado do outro)

// Solução 03. Retornar um array de elementos
export default props => [
    <h1>Paarte 1</h1>,
    <h1> Parte 2</h1>
]

// Solução 02. No HTML gerado não heverá nenhuma tag a envolver os elementos "Parte 1" e "Parte 2" 
export default props =>
    <React.Fragment>
        <h1>Paarte 1</h1>
        <h1>Paarte 2</h1>
    </React.Fragment>

    Uma forma reduzida de usar o React.Fragment é usar somente <>, mas desta forma nao pode passar atributo nesta tag do "Fragment", caso necessite.
    <>
        <h1>Paarte 1</h1>
        <h1>Paarte 2</h1>
    </>


// Solução 01. Mais usada!
export default props =>
    <div>
        <h1>Paarte 1</h1>
        <h1>Paarte 2</h1>
    </div>
*/