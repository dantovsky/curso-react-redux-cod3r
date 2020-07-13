const express = require('express') // this module is a singleton :: return always the same reference

// Exporting a function receiving a parameter => Will be used inside server.js, where that will pass the parameter (server instance)
module.exports = function (server) {

    // API Routes
    const router = express.Router()
    server.use('/api', router) // "use" means a middleware

    // TODO Routes
    const todoService = require('../api/todo/todoService')
    todoService.register(router, '/todos') // registering all URL (['get', 'post', 'put', 'delete'])
}

