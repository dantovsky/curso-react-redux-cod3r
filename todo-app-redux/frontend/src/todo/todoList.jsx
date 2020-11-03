import React from 'react'
import { connect } from 'react-redux' // Conecta esse componente com os dados que estão na store e com as Actios que serão disparadas
import IconButton from '../template/iconButton'

const TodoList = props => {

    const renderRows = () => {
        const list = props.list || []
        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
                <td>
                    <IconButton style='success' icon='check' onClick={() => props.handleMarkAsDone(todo)} hide={todo.done}></IconButton>
                    <IconButton style='warning' icon='undo' onClick={() => props.handleMarkAsPending(todo)} hide={!todo.done}></IconButton>
                    <IconButton style='danger' icon='trash-o' onClick={() => props.handleRemove(todo)} hide={!todo.done}></IconButton>
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

// Exportar o componente decorado (padrão de projeto Decorator)
export default connect(mapStateToProps)(TodoList)