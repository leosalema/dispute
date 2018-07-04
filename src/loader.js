const server = require('./config/server')

server.get('/', function(req, res) {
    res.send('Hello World!')
})