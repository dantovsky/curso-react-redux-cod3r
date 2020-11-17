// API do Mongoose a partir do Node-Restiful (tambémpoderia usar o Mongoose diretamente)
// Schema :: Mapeamento do Obj para como ficara no banco de dados

const restful = require('node-restful') // Ref para o Node-Restul
const mongoose = restful.mongoose // Ref do Mongoose que está dentro do Node-Restful

// Schema relacionada ao crédito
const creditSchema = new mongoose.Schema({
    name: { type: String, required: true },
    value: { type: Number, min: 0, required: true }
})

const debtSchema = new mongoose.Schema({
    name: { type: String, required: true },
    value: { type: Number, min: 0, required: [true, 'Informe o valor do débito!'] }, 
    status: { type: String, required: false, uppercase: true, enum: ['PAGO', 'PENDENTE', 'AGENDADO'] }
})

// Ciclo de pagamento: lista de debito e lista de credito
const billingCypleSchema = new mongoose.Schema({
    name: {type: String, required: true},
    month: {type: Number , min: 1, max: 12, required: true},
    year: {type: Number, min: 1970, max: 2100, required: true},
    credits: [creditSchema],
    debts: [debtSchema]
})

module.exports = restful.model('BillingCycle', billingCypleSchema)