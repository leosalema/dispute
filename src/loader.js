const server = require('./config/server')
require ('./config/routes')(server)

// const express = require('express')
// const app = express()

// app.get('/', function(req, res) {
//     res.send('Default Message')
// })