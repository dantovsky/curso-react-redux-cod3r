import axios from 'axios'

const URL = 'http://localhost:3003/api/todos'

// Action creator
export const changeDescription = event => ({
    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value
})

// Action creator que vai buscar os serviços no backend
export const search = () => {
    const request = axios.get(`${URL}?sort=-createdAt`)
    return {
        type: 'TODO_SEARCHED',
        payload: request
    }
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
    // Retornando um método que vai receber como param, o dispatch
    // Dispatch é quem envia a action para todos os reducers
    return dispatch => {
        axios.post(URL, { description })
            .then(resp => dispatch({type: 'TODO_ADDED', payload: resp.data}))
            .then(resp => dispatch(search()))
    }
}