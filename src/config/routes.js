const express = require('express')

module.exports = function(server) {
    const api = express.Router()

    server.use('/', api)

    server.get('/', function(req, res) {
        res.send('Hello World!')
    })

    server.get('/leonardo/', function(req, res) {
        res.send('Leonardo Salema')
    })
}