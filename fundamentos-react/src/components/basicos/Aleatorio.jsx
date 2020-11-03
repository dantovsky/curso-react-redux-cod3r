import React from 'react'

export default props => {

    // Destructoring the object
    const { min, max } = props;

    // Exemplos de destructoring (as chaves curvas do lado esquerdo significa desetruturação)
    // const [ a, b ] = [1, 2]
    // const { c, d, x, y } = { c:12, d: 45, x: 'teste' } // y = undefined
    // console.log('Destructuring: ', a, b, c, d, x, y);

    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    const rand = Math.floor(Math.random() * (max - min)) + min
    return (
        <div>
            <h2>Aula 17 - Desafio Número Aleatório</h2>
            <p><strong>Valor mínimo:</strong> { min }</p>
            <p><strong>Valor máximo:</strong> { max }</p>
            <p>Num rand: { rand }</p>
        </div>
    )
}