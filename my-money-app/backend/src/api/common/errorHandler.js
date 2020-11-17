// Aula 124 - Tratando as mensagens de erro

const _ = require('lodash')

// Deste errorHanler, vamos retornar um Middleware, que vai ser usado quando quiser tratar erro dentro da app.
// Padrão de assinatura de um Meddleware: (req, res, next)
module.exports = (req, res, next) => {
    // Pegar os erros
    const bundle = res.locals.bundle // Msg que vem por padrão no NodeRestful

    if (bundle.errors) {
        const errors = parseErrors(bundle.errors)
        res.status(500).json({errors})
    } else {
        next() // Se nao chamar o next(),  arequisicao e'interrompida nesse ponto
    }
}

// Parser para extrair as mensagens (Strings)
const parseErrors = (nodeRestfulErrors) => {
    const errors = []
    // For in, para fazer um for dentro dos attr e pegar os objetos
    _.forIn(nodeRestfulErrors, error => errors.push(error.message))
    return errors // Retorna uma lista de strings (mensagens)
}

// Em bollingCycleService.js, aplicou-se o momento em que se quer utilizar este Middleware
// const errorHandler = require('../common/errorHandler') // aula 124
// BillingCycle.after('post', errorHandler).after('put', errorHandler) // aula 124