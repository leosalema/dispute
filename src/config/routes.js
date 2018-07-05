const express = require('express')
const trailAdm = require('../api/administrator/trail')
const stageAdm = require('../api/administrator/stage')

module.exports = function(server) {
    const api = express.Router()

    server.use('/api', api)

    server.get('/api/', function(req, res) {
        res.send('Hello World!')
    })

    server.get('/api/administrator/trail/', function(req, res) {
        trailAdm.get(res)
    })

    server.get('/api/administrator/stage/:id', function(req, res) {
        stageAdm.get(req.params.id, res)
    })
}