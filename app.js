// server
const express = require('express')
// middlewares
const cors = require('cors')
const helmet = require('helmet')
// database
const db = require('./db')
// routing
const articlesRouter = require('./routes/articles')

const app = express()

app.use(cors()) // enable Cross-Origin Resource Sharing

app.use(helmet()) // enable some default security headers

app.use(express.json()) // accept JSON data in the request body
app.use(express.urlencoded({ extended: true })) // accept form data in the request body

// Check if the table Article exists, and create it if it doesn't
db.run('CREATE TABLE IF NOT EXISTS Article (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, content TEXT, author TEXT)', (err) => {
    if (err) {
        console.error(err.message)
    } else {
        console.log('Database initialized')
    }
})

app.use('/articles', articlesRouter) // use the articles router for all routes starting with /articles

module.exports = app