import {createStore, combineReducers} from 'redux'

import numerosReducer from './reducers/numeros'

// O reducer é uma função que recebe o estado atual para gerar um novo estado

const reducers = combineReducers({
    numeros:  numerosReducer,
})

// Funcao que vai configurar um novo estado a partir dos reducers
function storeConfig() {
    return createStore(reducers)
}

export default storeConfig