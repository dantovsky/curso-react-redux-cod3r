const express = require('express')
const server = express() // a constante server/app é uma instancia de express

// Mapear para a URL raiz da app o médoto GET e associar um Middleware e fazer
// um processamento dentro desse Middleware
server.get('/', function(req, res) {
  res.send('<h1>Index!</h1>')
})
// server =>  instancia do Express
// get    => método HTTP que queremos mapear
// '/'    => 1º param: URL para mapear
// func   => 2º param: função Middleware

// Mapeando para todos os métodos HTTP
server.all('/teste', function(req, res) {
  res.send('<h1>Teste!</h1>')
})

// Exemplo com expressão regular (RegEx) :: sempre que na URL tiver o termo "api"
server.get(/api/i, function(req, res) {
  res.send('<h1>API!</h1>')
})
// Ex: http://localhost:3000/minha_api/teste

server.listen(3000, () => console.log('Executando...'))
