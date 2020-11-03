const http = require('http')
const server = http.createServer(function(req, res) {
  // Escrever um cabeçalho na resposta
  res.writeHead(400, {"Content-Type": 'text/html'})

  // Finalizar a resposta e enviar para o browser
  res.end('<h1>Acho que é melhor usar o Express, não?</h1>')
})

// Criar uma porta e dizer ao server para ficar escutando essa porta
const porta = 3456
server.listen(porta, function() {
  console.log(`Escutando a porta ${porta}`)
})
