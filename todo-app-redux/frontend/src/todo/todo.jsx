import React, { Component } from 'react'
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

const URL = 'http://localhost:3003/api/todos' // backend: 3003, frontend: 8080

export default class Todo extends Component {

    constructor(props) {
        super(props)
        this.state = { description: '', list: [] }

        this.handleAdd = this.handleAdd.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
        this.handleMarkAsPending = this.handleMarkAsPending.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleClear = this.handleClear.bind(this)

        this.refresh()

        /*
        * O this em funções normais, é baseado em quem chamou,
        * ele muda o valor de acordo de quem o chamou.
        * 
        * Acima, o this fica amarrado para apontar para a própria classe.
        */
    }

    refresh(description = '') {
        const search = description ? `&description__regex=/${description}/i` : ''
        axios.get(`${URL}?sort=-createdAt${search}`)
            .then(resp => {
                this.setState({ ...this.state, description, list: resp.data })
                console.log(resp.data)
            })
    }

    handleSearch() {
        this.refresh(this.state.description)
    }

    // Vai escutar o onChange do input para estar sempre atualizando o estado baseado no que o user digitar
    handleChange(e) {
        this.setState({ ...this.state, description: e.target.value })
    }

    handleAdd() {
        const description = this.state.description
        axios.post(URL, { description })
            .then(resp => this.refresh())
    }

    handleRemove(todo) {
        axios.delete(`${URL}/${todo._id}`)
            .then(resp => this.refresh(this.state.description))
    }

    handleMarkAsDone(todo) {
        const obj = { ...todo, done: true }
        console.log('Obj: ', obj)
        axios.put(`${URL}/${todo._id}`, { ...todo, done: true })
            .then(resp => this.refresh(this.state.description))
    }

    handleMarkAsPending(todo) {
        const obj = { ...todo, done: false }
        console.log('Obj: ', obj)
        axios.put(`${URL}/${todo._id}`, { ...todo, done: false })
            .then(resp => this.refresh(this.state.description))
    }

    handleClear() {
        this.refresh()
    }

    render() {
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro'></PageHeader>
                <TodoForm
                    description={this.state.description}
                    handleChange={this.handleChange}
                    handleAdd={this.handleAdd}
                    handleSearch={this.handleSearch}
                    handleClear={this.handleClear} />
                <TodoList
                    list={this.state.list}
                    handleRemove={this.handleRemove}
                    handleMarkAsDone={this.handleMarkAsDone}
                    handleMarkAsPending={this.handleMarkAsPending} />
            </div>
        )
    }
}