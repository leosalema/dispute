const express = require('express')

module.exports = function(server) {
    const api = express.Router()

    server.use('/', api)

    server.get('/', function(req, res) {
        res.send('Hello World!')
    })
}