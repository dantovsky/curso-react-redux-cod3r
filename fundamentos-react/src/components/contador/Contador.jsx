import './Contador.css'
import React from 'react'

class Contador extends React.Component {

    // Aqui pode ser implementado o método construtor, deixando o state dentro
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         numero: props.numeroInicial
    //     }
    // }

    // Definir estado dentro de um componente baseado em classe
    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.passoInicial || 5,
    }

    // constructor(props) {
    //     super(props)
    //     this.inc = this.inc.bind(this) // no construtor, o this aqui dentro realmente aponta para a instância atual
    // }

    inc = () => {
        this.setState({
            numero: this.state.numero + this.state.passo
        })
    }

    dec = () => {
        this.setState({
            numero: this.state.numero - this.state.passo
        })
    }

    // Implementacao com funcao arrow, para nao ter problema com o "this"
    setPasso = (evento) => {
        this.setState({
            passo: +evento.target.value // o sinal de + no início converte o valor de string -> int
        })
    }

    render() {

        // JSX retornado
        return (
            <div className="Contador">
                <h2>Contador</h2>
                <p>{this.state.numero}</p>
                <div>
                    <label htmlFor="passoInput">Passo: </label>
                    <input id="passoInput" type="number"
                        value={this.state.passo} onChange={this.setPasso} />
                </div>
                <button onClick={this.inc}>+</button>
                <button onClick={this.dec}>-</button>
            </div>
        )
    }
}

export default Contador
// Como temos algo nomeado, podemos exportar ao final.
// Tambem posso exportar diretamente na declaracao da classe