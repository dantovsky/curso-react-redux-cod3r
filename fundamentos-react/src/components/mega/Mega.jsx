import React, { useState } from 'react'
import './Mega.css'

export default props => {

    function gerarNumeroNaoContido(min, max, array) {
        const aleatorio = parseInt(Math.random() * (max + 1 - min) + min)
        return array.includes(aleatorio) ?
            gerarNumeroNaoContido(min, max, array) :
            aleatorio
    }

    function gerarNumeros(quant) {
        const numeros = Array(quant)
            .fill(0)
            .reduce((nums) => {
                const novoNumero = gerarNumeroNaoContido(1, 60, nums)
                console.log([...nums, novoNumero])
                return [...nums, novoNumero]
            }, [])
            .sort((n1, n2) => n1 - n2)
        return numeros
    }

    const [quant, setQuant] = useState(props.quantidade || 6)
    const numerosIniciais = gerarNumeros(quant) // Array(quant).fill(0)
    const [numeros, setNumeros] = useState(numerosIniciais)

    return (
        <div className="Mega">
            <h3>Gere um novo jogo surpresa de {quant} numeros</h3>
            <button onClick={_ => setNumeros(gerarNumeros(quant))}>Gerar Surpresa</button>
            <div>
                <label>Quantidade de números</label>
                <input min="6" max="15" type="number" value={quant} onChange={e => {
                    setQuant(+e.target.value)
                    setNumeros(gerarNumeros(+e.target.value))
                }} />
            </div>
            <p>Surpresinha: {numeros.join(', ')}</p>
        </div>
    )
}