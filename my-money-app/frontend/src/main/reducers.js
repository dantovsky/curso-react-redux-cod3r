import { combineReducers } from 'redux'
import DashboardReducer from '../dashboard/dashboardReducer'
import TabReducer from "../common/tab/tabReducer";

/**
 * Este módulo combina todos os Reducers da app
 */

//  Resultado de todos os Reducers da app
const rootReducers = combineReducers({
    // Referencia para a store, chamada "dashboard", que aponta para um método reducer (uma função pura)
    // Reducer :: recebe dois params
    // 1. o próprio estado (a store)
    // 2. a ação (action que foi disparada para que o reducer fosse chamado) 
    // dashboard: () => ({ summary: { credit: 100, debt: 50 } })
    dashboard: DashboardReducer,
    tab: TabReducer
})

export default rootReducers

// Este é o arquivo que faz o papel de concatenar todos os reducers da app.
// Os dados dentro do Redux e gerenciado a partir de um objeto único, que é justamente
// utilizando este método que combina todos os reducers.
