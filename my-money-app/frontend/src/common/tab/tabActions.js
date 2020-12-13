// Este arquivo contém as funções que vão gerar as ações que vão ser disparadas para atualizar o estado da app a partir dos Reducers

// Temos duas ações
// - selecionar a aba
// - dizer quais abas estão vizíveis

// Funcao Action Creator
export function selectTab(tabId) {
    return {
        type: 'TAB_SELECTED',
        payload: tabId
    }
}

// Ex de chamada da função: showTabs('tabList', 'tabCreate')
export function showTabs(...tabIds) {
    const tabsToShow = {}
    tabIds.forEach(e => tabsToShow[e] = true)
    return {
        type: 'TAB_SHOWED',
        payload: tabsToShow
    }
}