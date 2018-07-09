const connection = require('../../config/database')

function dashboard() {
    this.get = function(res) {
        connection.acquire(function(err, con) {
            con.query("SELECT COUNT(PkId_TBTrail) AS count FROM TBTrail", function(err, result) {
                con.release()
                res.send(result)
            })
        })
    }
}

module.exports = new dashboard()