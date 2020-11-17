const express = require('express')

// Receber o server (criado em server.js) como param
module.exports = function(server) {


    // Definir URL base para todas as rotas
    const router = express.Router()
    server.use('/api', router) // Middleware :: definindo uma URL base (sempre que chegar uma requisicao com /api, ele vai chamar o router)

    // Rotas do Ciclo de Pagamento | Método de regitrar do Node-Restful que faz o mapeamento das URLs
    const BillingCycle = require('../api/billingCycle/billingCycleService')
    BillingCycle.register(router, '/billinCycles') // Crirou todos os webservices mencionados em billingCycleService.js: ['get', 'post', 'put', 'delete']
}