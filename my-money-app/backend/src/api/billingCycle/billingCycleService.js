// ~ ~ ~ Criação da API

const BillingCycle = require('./billingCycle')
const errorHandler = require('../common/errorHandler') // aula 124

// A partir do objeto "BillingCycle" vamos criar os serviços REST apenas dizendo quais saos os métodos HTTP que queremos trabalhar

BillingCycle.methods(['get', 'post', 'put', 'delete'])
BillingCycle.updateOptions({ new: true, runValidators: true }) // Options :: ""new" => detornar obj novo ao fazer update (PUT), "runValidators" => validar o Schema também ao fazer PUT, e não somente em POST
BillingCycle.after('post', errorHandler).after('put', errorHandler) // aula 124 - Momento em que se quer utilizar o Middleware de errorHanlder

BillingCycle.route('get', (req, res, next) => {
    BillingCycle.find({}, (err, docs) => {
        if (!err) {
            res.json(docs)
        } else {
            res.status(500).json({ errors: [error] })
        }
    }).skip(req.query.skip).limit(req.query.limit)
})

// Rota para contar o número de registos na tabela
BillingCycle.route('count', (req, res, next) => {
    BillingCycle.count((error, value) => {
        if (error) {
            res, status(500).json({ errors: [error] })
        } else {
            res.json({ value })
        }
    })
})

// Aula 123 :: Sumário de ciclos de pagamanto (consolidado de tudo que já foi cadastrado na BD)
BillingCycle.route('summary', (req, res, next) => {
    // Pipeline de agragação
    BillingCycle.aggregate([{
        // Soma os credits de cada registo e guarda na var credit; soma os debts de cada registo e guarda na var debi
        $project: { credit: { $sum: "$credits.value" }, debt: { $sum: "$debts.value" } }
    }, {
        // Soma todos os credits; soma todos os debts
        $group: { _id: null, credit: { $sum: "$credit" }, debt: { $sum: "$debt" } }
    }, {
        // Filtra o que quer apresentar
        $project: { _id: 0, credit: 1, debt: 1 }
    }], (error, result) => {
        if (error) {
            res.status(500).json({ errors: [error] })
        } else {
            res.json(result[0] || { credit: 0, debt: 0 })
        }
    })
})

module.exports = BillingCycle