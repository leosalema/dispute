// const server = require('./config/server')
// require ('./config/routes')(server)

const express = require('express')
const app = express()

app.get('/', function(req, res) {
    res.send(process.env.MESSAGE || 'Default Message')
})

var port = Number(process.env.PORT || 5000)
app.listen(port, function() {
    console.log(`Listening on ${port}`)
})