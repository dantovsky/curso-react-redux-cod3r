import React from 'react'
import ReactDom from 'react-dom' // Arquivo que interage com o DOM da página

// Imports para o Redux
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'

import App from './main/app'
import reducers from './main/reducers' // Import dos reducers criados

// Redux DevTols Chrome Extension
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // Aula 102

// Criação da store :: recebe o resultado do método createStore, passando os reducers como parâmetro
// store => é o objeto estado da app, que será controlado pelo Redux
const store = applyMiddleware(thunk, multi, promise)(createStore)(reducers, devTools)

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app'))

// Antes de aplicar o Redux
// ReactDom.render(<App />, document.getElementById('app'))