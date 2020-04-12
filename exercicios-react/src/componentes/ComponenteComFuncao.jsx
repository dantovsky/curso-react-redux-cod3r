import React from 'react'

export default props => {
    const aprovados = ['Paula', 'Roberta', 'Gustavo', 'Julia']

    // Receber os itens e transformá-los em elementos do tipo JSX
    const gerarItens = itens => {
        // Funcao map() transforma elementos do Array em outros elementos
        return itens.map(item => <li>{item}</li>)
    }

    // Retornando uma expressao
    return (
        <ul>
            {gerarItens(aprovados)}
        </ul>
    )
}