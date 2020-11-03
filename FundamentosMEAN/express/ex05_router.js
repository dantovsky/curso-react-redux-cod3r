const express = require('express')
const server = express() // a constante server/app é uma instancia de express
const router = require('./ex05_routes') // importanto as rotas criadas

server.use('/api', router)

server.listen(3000, () => console.log('Executando...'))
