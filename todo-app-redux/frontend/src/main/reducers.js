import { combineReducers } from 'redux'
import todoReducer from '../todo/todoReducer'

// Reducer que vai combinar todos os outros
const rootReducer = combineReducers({
    todo: todoReducer
})

// Este reducer será usado na config do index.js
export default rootReducer