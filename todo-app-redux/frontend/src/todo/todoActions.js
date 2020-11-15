import axios from 'axios'

// Notes: não está usando "promise" em nenhuma action

const URL = 'http://localhost:3003/api/todos'

// Action creator
export const changeDescription = event => ({
    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value
})

// Action creator que vai buscar os serviços no backend
export const search = () => {
    return (dispatch, getState) => {
        const description = getState().todo.description
        const search = description ? `&description__regex=/${description}/i` : ''
        const request = axios.get(`${URL}?sort=-createdAt${search}`)
            .then(resp => dispatch({ type: 'TODO_SEARCHED', payload: resp.data }))
    }
    // return {
    //     type: 'TODO_SEARCHED',
    //     payload: request
    // }
}

// // Aula 105. Adicionar TODO
// export const add = (description) => {
//     const request = axios.post(URL, { description })
//     return [
//         { type: 'TOOD_ADDED', payload: request },
//         search()
//     ]
// }

export const add = (description) => {
    // Retornando um método que recebe o dispatch como param
    // Dispatch é quem envia a action para todos os reducers
    return dispatch => {
        axios.post(URL, { description })
            .then(resp => dispatch(clear()))
            .then(resp => dispatch(search()))
    }
}

// Método que vai marcar uma tarefa como concluída (recebe uma tarefa como param)
export const markAsDone = (todo) => {
    return dispatch => {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: true })
            // .then(resp => dispatch({ type: 'TODO_MARKED_AS_DONE', payload: resp.data })) // Nao eh necessario
            .then(resp => dispatch(search())) // using Thunk Middleware
    }
}

export const markAsPending = (todo) => {
    return dispatch => {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: false })
            // .then(resp => dispatch({ type: 'TODO_MARKED_AS_PENDING', payload: resp.data })) // Nao eh necessario
            .then(resp => dispatch(search())) // using Thunk Middleware
    }
}

export const remove = (todo) => {
    return dispatch => {
        axios.delete(`${URL}/${todo._id}`)
            .then(resp => dispatch(search())) // using Thunk Middleware
    }
}

export const clear = () => {
    return [{ type: 'TODO_CLEAR' }, search()] // using Multi Middleware
}