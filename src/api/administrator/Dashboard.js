const Database = require('../../config/database')

function dashboard() {
     this.get = function(req) {
        connection.acquire(function(err, con) {
            con.query("SELECT COUNT(PkId_TBTrail) AS trail FROM TBTrail")
            con.release()
            res.send(result)
        })
    }
}

module.exports = new dashboard()