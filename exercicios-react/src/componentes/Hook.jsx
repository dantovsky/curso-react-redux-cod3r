import React, { useState, useEffect } from 'react'

// Introducing Hooks
// https://reactjs.org/docs/hooks-intro.html

// A partir do useState podemos instanciar um estado e temos disponível um método set
// O useState tem 2 campos (valor, método para alterar o valor)
// Podemos tanto usar um método de desestruturacao para receber os campos do useState,
// como também, associar o useState a uma variável e aceder aos índices desta var

export default props => {
    // Usando desestruturador: [var, funcao para alterar a var]
    const [contador, setContador] = useState(0)
    const [parOuImpar, setParOuImpar] = useState('par')

    // Funcao chamada sempre que o coponente é criado ou alterado
    useEffect(() => {
        contador % 2 == 0 ? setParOuImpar('Par') : setParOuImpar('Impar')
    })
    return (
        <div>
            <h1>{contador}</h1>
            <h3>{parOuImpar}</h3>
            <button onClick={() => setContador(contador + 1)}>Inc</button>
            <button onClick={() => setContador(contador - 1)}>Dec</button>
        </div>
    )
}