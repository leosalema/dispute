// const server = require('./config/server')
// require ('./config/routes')(server)

const express = require('express')
const server = express()

server.get('/', function(req, res) {
    res.send('Hello World!')
})
const port = 5000
server.listen(port, function() {
    console.log(`BACKEND running on port ${port}`)
})