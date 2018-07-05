const mysql = require('mysql')

function Database() {
    this.pool = null

    this.init = function() {
        this.pool = mysql.createPool({
            connectionLimit: 100,
            host: "mysql524.umbler.com",
            user: "desafio1",
            password: "1q2w3e4r",
            database: "dbdesafio",
            port: 41890
        })
    }
    
    this.acquire = function(callback) {
        this.pool.getConnection(function(err, connection) {
            callback(err, connection)
        })
    }
}

module.exports = new Database()