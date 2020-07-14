const Todo = require('./todo').default

// Enabling which methods are available on the API REST made by Node Restful
Todo.methods(['get', 'post', 'put', 'delete'])
Todo.updateOptions({ new: true, runValidators: true }) // updates will return the new record and will be validated

module.exports = Todo