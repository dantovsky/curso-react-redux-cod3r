import React, { Component } from 'react'

// Imports para o Redux
import { connect } from 'react-redux' // Conecta esse componente com os dados que estão na store e com as Actios que serão disparadas
import { bindActionCreators } from 'redux'

import Grid from '../template/grid'
import IconButton from '../template/iconButton'

// Actions implementadas
import { add, changeDescription, search } from './todoActions' // Faz o bind das Actions com o Dispatch

class TodoForm extends Component {
    constructor(props) {
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
    }

    // Metodo que eh chamado sempre que o componente eh exibido
    componentWillMount() {
        this.props.search()
    }

    // Atalhos do teclado
    // Enter            :: adiciona nova tarefa
    // Enter + Shift    :: pesquisa
    // Escape           :: clear
    keyHandler(e) {
        const { add, search, description } = this.props
        if (e.key === 'Enter') {
            e.shiftKey ? search() : add(description)
        } else if (e.key === 'Escape') {
            this.props.handleClear()
        }
    }

    render() {
        const { add, search, description } = this.props
        return (
            <div role='form' className='todoForm'>
                <Grid cols='12 9 10'>
                    <input id='description' className='form-control' placeholder='Adicione uma tarefa'
                        onChange={this.props.changeDescription}
                        onKeyUp={this.keyHandler}
                        value={this.props.description} />
                </Grid>
                <Grid cols='12 3 2'>
                    <IconButton style="primary" icon="plus" onClick={() => add(description)}></IconButton>
                    <IconButton style="info" icon="search" onClick={() => search()}></IconButton>
                    <IconButton style="default" icon="close" onClick={this.props.handleClear}></IconButton>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = state => ({ description: state.todo.description })
const mapDispatchToProps = dispatch => bindActionCreators({ add, changeDescription, search }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)

// --- ANOTACOES

// O componente TodoForm no estilo funcional (antes de alterar para componente de classe):
// Essa alteracao foi feita para que fosse possivel usar o metodo de ciclo de vida "componentWillMount()"

/*
const TodoForm = props => {
    const keyHandler = e => {
        if (e.key === 'Enter') {
            e.shiftKey ? props.handleSearch() : props.handleAdd()
        } else if (e.key === 'Escape') {
            props.handleClear()
        }
    }
    return (
        <div role='form' className='todoForm'>
            <Grid cols='12 9 10'>
                <input id='description' className='form-control' placeholder='Adicione uma tarefa'
                    onChange={props.changeDescription}
                    onKeyUp={keyHandler}
                    value={props.description} />
            </Grid>
            <Grid cols='12 3 2'>
                <IconButton style="primary" icon="plus" onClick={props.handleAdd}></IconButton>
                <IconButton style="info" icon="search" onClick={props.handleSearch}></IconButton>
                <IconButton style="default" icon="close" onClick={props.handleClear}></IconButton>
            </Grid>
        </div>
    )
}
*/

// Divs antes de usar o componente Grid, para gerar as colunas Bootstrap automaticamente
// Button e icon antes de usar o componente IconButton
//
// < div className='col-xs-12 col-sm-9 col-md-10' >
//     <input id='description' className='form-control' placeholder='Adicione uma tarefa' />
//     </div >
// <div className='col-xs-12 col-sm-3 col-md-2'>
//     <button className='btn btn-primary'>
//         <i className='fa fa-plus'></i>
//     </button>
// </div>