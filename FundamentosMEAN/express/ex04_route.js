const express = require('express')
const server = express() // a constante server/app é uma instancia de express

// ----------------------------------------------
// server.route
// ----------------------------------------------

// Criando um prefixo de URL base, utilizando o método route()
server.route('/clientes')
.get((req, res) => res.send('Lista de Clientes'))
.post((req, res) => res.send('Novo Cliente'))
.put((req, res) => res.send('Altera Cliente'))
.delete((req, res) => res.send('Remove Cliente'))

server.listen(3000, () => console.log('Executando...'))
