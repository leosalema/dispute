const express = require('express')
const trailAdm = require('../api/administrator/trail')

module.exports = function(server) {
    const api = express.Router()

    server.use('/api', api)

    server.get('/api/administrator/trail/', function(req, res) {
        trailAdm.get(res)
    })

    server.post('/api/administrator/trail/', function(req, res) {
        trailAdm.create(req.body, res)
    })

    server.put('/api/administrator/trail/', function(req, res) {
        trailAdm.update(req.body, res)
    })
}