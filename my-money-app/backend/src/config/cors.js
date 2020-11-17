module.exports = (req, res, next) => {
    // Headers to allow different origins
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next() // Se não usar o next() a requisição fica parada neste pondo até dar timeout
    // Podemos responder, enviar um erro ou ou chamar o next(), para o próximo Middleware ser executado
}