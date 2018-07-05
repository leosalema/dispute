const connection = require('../../config/database')

function trailAdm() {
    this.get = function(res) {
        connection.acquire(function(err, con) {
            con.query("SELECT * FROM TBTrail ORDER BY DFOrder_TBTrail", function(err, result) {
                con.release()
                res.send(result)
            })
        })
    }
}

module.exports = new trailAdm()