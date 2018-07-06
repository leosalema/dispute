const connection = require('../../config/database')

function stageAdm() {
    this.get = function(id, res) {
        connection.acquire(function(err, con) {
            con.query("SELECT *, (SELECT COUNT(DFTitle_TBQuestion) FROM TBQuestion " +
            "WHERE FkId_Stage_TBQuestion = TBStage.PkId_TBStage) AS question " +
            "FROM TBStage " +
            "WHERE FkId_TRail_TBStage = ? " +
            "ORDER BY DFOrder_TBStage", [id], function(err, result) {
                con.release()
                res.send(result)
            })
        })
    }

    this.getEdit = function(id, res) {
        connection.acquire(function(err, con){
            con.query("SELECT * FROM TBStage WHERE PkId_TBStage = ?", [id], function(err, result) {
                con.release()
                res.send(result)
            })
        })
    }

    this.create = function(stage, res) {
        connection.acquire(function(err, con) {
            con.query("INSERT INTO TBStage SET ?", stage, function(err, result) {
                con.release()
                if (err)
                    res.send({ status: 1, message: 'Stage create failed' })
                else
                    res.send({ status: 0, message: 'Stage creating successfully' })
            })
        })
    }

    this.update = function(stage, res) {
        connection.acquire(function(err, con) {
            con.query("UPDATE TBStage SET ? WHERE PkId_TBStage = ?", [stage, stage.PkId_TBStage], function(err, result) {
                con.release()
                if (err) 
                    res.send({ status: 1, message: 'Stage update failed' })
                else
                    res.send({ status: 0, message: 'Stage update successfully '})
            })
        })
    }
}

module.exports = new stageAdm()
