const mongoose = require('mongoose')
mongoose.Promise = global.Promise // Mongoose will uses the Node API (Mongoose's API is deprecated, so this avoid warning messages)
module.exports = mongoose.connect('mongodb://localhost/todo')