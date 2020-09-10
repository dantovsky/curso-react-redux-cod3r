import {
    NUM_MIN_ALTERADO,
    NUM_MAX_ALTERADO
} from './actionTypes'

// Action Creator :: Tem o papel de retornar uma Action
export function alterarNumeroMinimo(novoNumero){
    return {
        type: NUM_MIN_ALTERADO,
        payload: novoNumero
    }
}

// Action Creator
export function alterarNumeroMaximo(novoNumero){
    return {
        type: NUM_MAX_ALTERADO,
        payload: novoNumero
    }
}