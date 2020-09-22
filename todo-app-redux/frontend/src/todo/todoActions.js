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