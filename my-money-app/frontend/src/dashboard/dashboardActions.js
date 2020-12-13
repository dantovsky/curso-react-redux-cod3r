import axios from 'axios'
const BASE_URL = 'http://localhost:3004/api'

// Action Creator :: cria um objeto que é uma ação (tem os atributos "type" e "payload")
export function getSummary() {
    const request = axios.get(`${BASE_URL}/billinCycles/summary`) // Chamada assíncrona

    // Resultado retornado de forma síncrona
    return {
        type: 'BILLING_SUMMARY_FETCHED',
        payload: request
    }
}