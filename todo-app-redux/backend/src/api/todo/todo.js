// Mapping the obj to Mongo objects.
const restful = require('node-restful')
const mongoose = restful.mongoose

// Model
const todoSchema = new mongoose.Schema({
    description: { type: String, required: true },
    done: { type: Boolean, required: true, default: false },
    createdAt: { type: Date, default: Date.now }
})

module.exports = restful.model('Todo', todoSchema)

/*
 * To testing API:
 * - run backend: npm run dev (use sudo if running on Linux)
 * - run Mongo: sudo mongod
 * - on Postman, choose POST
 * - API: http://localhost:3003/api/todos
 * - Choose Body >> x-www-form-urlencoded
 * - Choose key-value edit or Bulk edit:
 * - Insert: description: Concluir o curso de React.
 *
 * GET
 *
 * http://localhost:3003/api/todos
 *
 * Sorted desc
 * http://localhost:3003/api/todos?sort=-createdAt
 *
 * Sorted desc and using regex to filtering
 * http://localhost:3003/api/todos?sort=-createdAt&description__regex=/curso/
 */