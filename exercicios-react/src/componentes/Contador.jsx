import React, { Component } from 'react'

export default class Contador extends Component {

    // Inicializa o estado do componente (poder feito diretamente na classe ou no construtor)
    state = {
        numero: this.props.numeroInicial
    }

    // Uso de arrwo function para que o this funcione corretamente no contexto da classe.
    maisUm = () => {
        this.setState({ numero: this.state.numero + 1 })
        console.log(this)
    }

    menosUm = () => {
        this.setState({ numero: this.state.numero - 1 })
    }

    // Única funcao para realizar as duas operações de adicao e subtracao
    alterarNumero = diferenca => {
        this.setState({
            numero: this.state.numero + diferenca
        })
    }

    render() {
        return (
            <div>
                <div>Número: {this.state.numero}</div>
                {/* O botão abaixo passa a referência da função e não a chamada da função */}
                <button onClick={this.maisUm}>Inc</button>
                <button onClick={this.menosUm}>Dec</button>
                
                <button onClick={() => this.alterarNumero(10)}>Inc 10</button>
                <button onClick={() => this.alterarNumero(-10)}>Dec 10</button>
            </div>
        )
    }
}

// Soluções para conseguir usar o this em toda a classe

// Solução 01 :: bind(this) da função no construtor da classe
// constructor(props) {
//     super(props)
//     this.maisUm = this.maisUm.bind(this)
// }

// Solução 02 :: Uso de arrow function no onClick (ela garante que o this será associado ao local que a função foi escrita)
// A partir do ECMAScript 2015 surgiu a funcao arrow, e ela trata o this associado ao contexto léxico
// <button onClick={() => this.maisUm()}>Inc</button>

// Solução 03 :: Transformar a função maisUm() numa variável que recebe uma arrow function
// maisUm = () => {
//     //this.state.numero++
//     console.log(this)
// }

// (!) Tudo o que se recebe via propriedade não pode ser mudado, ou seja, é "ready only".
// Logo, não é possível alterar um valor do props. Para isso, devemos utilizar estado, conseguindo assim, modifincar algo dentro do componente.