const express = require('express')
const TrailAdm = require('../api/administrator/Trail')
const StageAdm = require('../api/administrator/Stage')
const QuestionAdm = require('../api/administrator/Question')
const OptionAdm = require('../api/administrator/Option')

module.exports = function(server) {
    const api = express.Router()

    server.use('/api', api)

    server.get('/', function(req, res) {
        res.send('Disputing')
    })

    // server.get('/api/', function(req, res) {
    //     res.send('Hello World!')
    // })

    // server.get('/api/administrator/trail/', function(req, res) {
    //     TrailAdm.get(res)
    // })

    // server.get('/api/administrator/trail/:id', function(req, res) {
    //     TrailAdm.getEdit(req.params.id, res)
    // })

    // server.post('/api/administrator/trail/', function(req, res) {
    //     TrailAdm.create(req.body, res)
    // })

    // server.put('/api/administrator/trail/', function(req, res) {
    //     TrailAdm.update(req.body, res)
    // })

    // server.get('/api/administrator/:id/stage/', function(req, res) {
    //     StageAdm.get(req.params.id, res)
    // })

    // server.get('/api/administrator/stage/:id', function(req, res) {
    //     StageAdm.getEdit(req.params.id, res)
    // })

    // server.post('/api/administrator/stage/', function(req, res) {
    //     StageAdm.create(req.body, res)
    // })

    // server.put('/api/administrator/stage/:id', function(req, res) {
    //     StageAdm.update(req.body, res)
    // })

    // server.get('/api/administrator/:id/question/', function(req, res) {
    //     QuestionAdm.get(req.params.id, res)
    // })

    // server.get('/api/administrator/question/:id', function(req, res) {
    //     QuestionAdm.getEdit(req.params.id, res)
    // })

    // server.post('/api/administrator/question/', function(req, res) {
    //     QuestionAdm.create(req.body, res)
    // })

    // server.put('/api/administrator/question/:id', function(req, res) {
    //     QuestionAdm.update(req.body, res)
    // })

    // server.get('/api/administrator/:id/option/', function(req, res) {
    //     OptionAdm.get(req.params.id, res)
    // })

    // server.get('/api/administrator/option/:id', function(req, res) {
    //     OptionAdm.getEdit(req.params.id, res)
    // })

    // server.post('/api/administrator/option/', function(req, res) {
    //     OptionAdm.create(req.body, res)
    // })

    // server.put('/api/administrator/option/:id', function(req, res) {
    //     OptionAdm.update(req.body, res)
    // })
}