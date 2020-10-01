const express = require('express')
const server = express() // a constante server/app é uma instancia de express

// Utilizando a funcao Middleware completa (com req, res e next)
server.get('/', function(req, res, next) {
  console.log('Inicio...')
  next() // neste ponto irá chamar o próximo Middleware do mapeamento HTTP abaixo
  console.log('Fim...')
})

server.get('/', function(req, res) {
  console.log('Resposta...')
  res.send('<h1>Olá Express!</h1>')
})

server.listen(3000, () => console.log('Executando...'))

/* A execução deste módulo terá o seguinte output no console
Executando...
Inicio...
Resposta...
Fim...
*/
