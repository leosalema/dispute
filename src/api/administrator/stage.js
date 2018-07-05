const connection = require('../../config/database')

function stageAdm() {
    this.get = function(id, res) {
        connection.acquire(function(err, con) {
            con.query("SELECT * FROM TBStage WHERE FkId_Trail_TBStage = ?", [id], function(err, result) {
                con.release()
                res.send(result)
            })
        })
    }
}

module.exports = new stageAdm()