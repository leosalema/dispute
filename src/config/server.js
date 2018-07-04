const port = Number(process.env.PORT || 5000)

const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const queryParser = require('express-query-int')
// const database = require('./database')

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(queryParser())

// database.init()

server.listen(port, function() {
    console.log(`BACKEND runnning on port ${port}`)
})

module.exports = server