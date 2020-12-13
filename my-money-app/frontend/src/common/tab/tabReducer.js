const INITIAL_STATE = { selected: '', visible: {} }

// Este método Reducer é chamado a partir do momento em que uma acao é disparada, a partir do método dispatch
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'TAB_SELECTED':
            return { ...state, selected: action.payload }
        case 'TAB_SHOWED':
            return { ...state, visible: action.payload}  
        default:
            return state
    }
}