import React, { useState } from 'react'
import InditeraFilho from './IndiretaFilho'

export default props => {

    // Somente com estas vars a info nao será atualizada neste componente pai,
    // isto precisa ser implementado com estado.
    // let nome = ''
    // let idade = 0
    // let nerd = false
    // A função useState retorna um array com duas poesicoes:

    // - [0]: o valor
    // - [1]: função usada para alterar o valor

    // Utilizando o destructuring, podemos receber as duas posições numa mesma linha de code
    const [nome, setNome] = useState('?')
    const [idade, setIdade] = useState(0)
    const [nerd, setNerd] = useState(false)

    console.log('nome inicial: ', nome)

    function fornecerInformacoes(nome, idade, nerd) {
        setNome(nome)
        setIdade(idade)
        setNerd(nerd)
    }

    return (
        <div>
            <div>Pai</div>
            <span>{nome}</span>
            <span> <strong>{idade}</strong></span>
            <span> {nerd ? 'Verdadeiro' : 'Falso'}</span>
            <InditeraFilho quandoClicar={fornecerInformacoes}></InditeraFilho>
        </div>
    )
}