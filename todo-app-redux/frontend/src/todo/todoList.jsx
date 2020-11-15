import React from 'react'
import { connect } from 'react-redux' // Conecta esse componente com os dados que estão na store e com as Actios que serão disparadas
import IconButton from '../template/iconButton'
import { bindActionCreators } from 'redux' // aula 108
import { markAsDone, markAsPending, remove } from './todoActions' // aula 108

const TodoList = props => {

    const renderRows = () => {
        const list = props.list || []
        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
                <td>
                    <IconButton style='success' icon='check' onClick={() => props.markAsDone(todo)} hide={todo.done}></IconButton>
                    <IconButton style='warning' icon='undo' onClick={() => props.markAsPending(todo)} hide={!todo.done}></IconButton>
                    <IconButton style='danger' icon='trash-o' onClick={() => props.remove(todo)} hide={!todo.done}></IconButton>
                </td>
            </tr>
        ))
    }

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th className='tableActions'>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}

// Método que vai mapear o estado do Redux com as props do objeto
const mapStateToProps = state => ({list: state.todo.list})
const mapDispatchToProps = dispatch => bindActionCreators({ markAsDone, markAsPending, remove }, dispatch) // aula 108

// Exportar o componente decorado (padrão de projeto Decorator)
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)