const express = require('express')
const router = express.Router()

// use() mapeia para qualquer verbo HTTP (GET; POST; PUT; DELETE)
// Middleware que vai ser chamado sempre e vai vaicular a duração da requisicao
router.use((req, res, next) => {
  const init = Date.now()
  next()
  console.log(`Tempo = ${Date.now() - init} ms.`)
})

// Recebendo valor variável
router.get('/produtos/:id', (req, res) => {
  // O parametro recebido vem dentro da requisicao

  // Convertendo o resultado para JSON e enviado como MIME Type JSON
  res.json({id: req.params.id, name: 'Caneta'})
})

// Outro exemplo
router.get('/clientes/:id/:name', (req, res) => {
  console.log({id: req.params.id, name: 'João'})
  res.json({id: req.params.id, name: req.params.name})
})

module.exports = router
