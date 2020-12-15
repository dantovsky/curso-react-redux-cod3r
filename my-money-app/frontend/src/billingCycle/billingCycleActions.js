import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { initialize, reset as resetForm } from 'redux-form' // Action Creators do Redux Form
import { showTabs, selectTab } from '../common/tab/tabActions'

const BASE_URL = 'http://localhost:3003/api'
const INITIAL_VALUES = {credits: [{}]}

// Action Creator
export function getList() {
    const request = axios.get(`${BASE_URL}/billingCycles`)
    return {
        type: 'BILLING_CYCLES_FETCHED',
        payload: request
    }
}

// Action Creator
export function create(values) {
    return submit(values, 'post')
}

// Action Creator
export function update(values) {
    return submit(values, 'put')
}

// Action Creator
export function remove(values) {
    return submit(values, 'delete')
}

// Este método é adaptado para funcionar com os métodos POST, PUT e DELETE
function submit(values, method) {
    return dispatch => {
        const id = values._id ? values._id : ''
        axios[method](`${BASE_URL}/billingCycles/${id}`, values)
            .then(resp => {
                toastr.success('Sucesso', 'Operação muito bem realizada com sucesso!')
                dispatch(init())
            }).catch(e => {
                e.response.data.errors.forEach(error => toastr.error('Erro', error));
            })
    }
}

export function showUpdate(billingCycle) {
    // Utilizando o Redux Multi ao retornar um array de Actions
    return [
        showTabs('tabUpdate'),
        selectTab('tabUpdate'),
        initialize('billingCycleForm', billingCycle)
    ]
}

export function showDelete(billingCycle) {
    // Utilizando o Redux Multi ao retornar um array de Actions
    return [
        showTabs('tabDelete'),
        selectTab('tabDelete'),
        initialize('billingCycleForm', billingCycle)
    ]
}

// Este Action Creator representa o estado inicial do cadastro do ciclo de pagamentos
export function init() {
    return [
        showTabs('tabList', 'tabCreate'),
        selectTab('tabList'),
        getList(),
        initialize('billingCycleForm', INITIAL_VALUES)
    ]
}

// Cópia da funcao create() com comentários sobre o Redux
/*
// Action Creator
// Para que se consiga disparar várias actions a partir de um único Action Creator, precisa-se do Middleware Redux Multi e do Middleware Redux Thunk.
export function create(values) {
    // Em vez de retornar uma Action, vai retornar uma função que vai ser chamada pelo Middleware redux-thunk. Uma função que recebe o dispatch como param e retornando essa funçao,
    // o próprio Middleware vai chamar esse método e vamos ter o controle para disparar o que quiser a partir da mensagem de sucesso.
    return dispatch => {
        axios.post(`${BASE_URL}/billingCycles`, values)
            .then(resp => {
                toastr.success('Sucesso', 'Operação muito bem realizada com sucesso!')
                // Quando fazemos um dispatch de um array, quem vai ler esse array é o Redux Multi,
                // então ele percorrer cada uma das ações e vai dispará-las uma atrás da outra.
                // (!) O dispatch recebe uma Action! O fato de passarmos um array de actions,
                // é porque estamos usando o Middleware multi.
                dispatch([
                    resetForm('billingCycleForm'),
                    getList(),
                    selectTab('tabList'),
                    showTabs('tabList', 'tabCreate')
                ])
            }).catch(e => {
                e.response.data.errors.forEach(error => toastr.error('Erro', error));
            })
    }
}
*/