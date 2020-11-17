// Config com o MongoDB
const mongoose = require('mongoose')
mongoose.Promise = global.Promise // Pega a API do Node e atribui essa API para mongoose.Promise (serve para evitar alguns warning, pois está deprecated)
module.exports = mongoose.connect('mongodb://localhost/mymoney', { useNewUrlParser: true }) // Nome da BD que será criada dentro do mongoDB

// Traduzir as mensagens de erro
mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório."
mongoose.Error.messages.Number.min = "O '{VALUE}' informado é menor que o limite mínimo de '{MIN}'"
mongoose.Error.messages.Number.max = "O '{VALUE}' informado é maior que o limite máximo de '{MAX}'"
mongoose.Error.messages.String.enum = "'{VALUE}' não é válido para o atributo '{PATH}'"