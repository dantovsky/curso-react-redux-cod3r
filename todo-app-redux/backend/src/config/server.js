const port = 3003

const bodyParser = require('body-parser') // parsing form data and requisition
const express = require('express') // server web
const server = express() // the const server is also commonly called "app". Each time it is instantiated is a different object
const allowCors = require('./cors')

// Applying midlewares for requisitions
server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(allowCors)

server.listen(port, function () {
    console.log(`Backend is running on port ${port}.`)
})

module.exports = server