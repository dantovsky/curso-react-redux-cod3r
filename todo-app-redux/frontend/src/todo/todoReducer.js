const INITIAL_STATE = {
    description: '', list: []
}

// Reducer :: recebe o estado atual e uma action
// Sempre que uma Action for eecutado, os Reducers da app são chamados
// e é decidido se irá mudar o estado ou manter como está.
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'DESCRIPTION_CHANGED':
            return { ...state, description: action.payload }
        case 'TODO_SEARCHED':
            return { ...state, list: action.payload }
        case 'TODO_CLEAR':
            return { ...state, description: '' }
        default:
            return state
    }
}

// INITIAL_STATE que era usado como documento estático:
/*
const INITIAL_STATE = {
    description: 'Ler livro',
    list: [{
        _id: 1,
        description: 'Pagar fatura do cartão',
        done: true
    }, {
        _id: 2,
        description: 'Reunião com a equipe às 10:00',
        done: false
    }, {
        _id: 3,
        description: 'Consulta médica na terça depois do almoço',
        done: false
    }]
}
*/