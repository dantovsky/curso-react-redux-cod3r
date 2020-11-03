const express = require('express')
const server = express() // a constante server/app é uma instancia de express

// ----------------------------------------------
// server.user
// ----------------------------------------------

/* Ao utilizar o método user(), ele mapeira para todos os métodos HTTP,
como também, ele define o início da URL (o prefixo).

Se quisermos utilizar o use() para aplicar para todas as URLs da app, podemos
suprimir a indicação da URL. Ex:

server.use(function(req, res, next) {
  console.log('Inicio...')
})

*/

// Utilizando a funcao Middleware completa (com req, res e next)
server.use('/api', function(req, res, next) {
  console.log('Inicio...')
  next() // neste ponto irá chamar o próximo Middleware do mapeamento HTTP abaixo
  console.log('Fim...')
})

server.use(function(req, res) {
  console.log('Resposta...')
  res.send('<h1>Utilizando Middleware para toda a app!</h1>')
})

server.listen(3000, () => console.log('Executando...'))

/* A execução deste módulo terá o seguinte output no console
Executando...
Inicio...
Resposta...
Fim...
*/
