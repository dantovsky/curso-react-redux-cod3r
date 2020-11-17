const port = 3004

const bodyParser = require('body-parser') // Faz o parser o corpo da requisicao para entregar o objeto pronto
const express = require('express') // Required do Node (padrão Commons JS -> modularização no Node) Singleton do Express
const server = express() // Novo servidor
const allowCors = require('./cors')
const queryParser = require('express-query-int')

// --- Middlewares para serem interceptados pela requisição

// Aqui diz: "Para toda requisicao que chegar, use o Body-Parser para interprertar quando vier no formado URL-Encoded (ex: '/ola')"
server.use(bodyParser.urlencoded({ extended: true }))

// Body-Parser para quando no corpo da req vier um JSON
server.use(bodyParser.json())

// Allow CORS
server.use(allowCors)

// Transformar as queries na URL, de String (que são números) para Integer (valor numérico)
server.use(queryParser())

server.listen(port, function() {
    console.log(`Backend is running on port ${port}.`)
})

module.exports = server