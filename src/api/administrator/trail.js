const connection = require('../../config/database')

function trailAdm() {
    this.get = function(res) {
        connection.acquire(function(err, con) {
            con.query("SELECT `PkId_TBTrail`, `DFTitle_TBTrail`, " + 
            "`DFDescription_TBTrail`, `DFStatus_TBTrail`, `DFOrder_TBTrail`, " + 
            "(SELECT count(DFTitle_TBStage) FROM TBStage " + 
            "WHERE FkId_trail_TBStage = TBTrail.PkId_TBTrail) as fase " +
            "FROM `TBTrail` ORDER BY DFOrder_TBTrail", function(err, result) {
                con.release()
                res.send(result)
            })
        })
    }

    this.getEdit = function(id, res) {
        connection.acquire(function(err, con) {
            con.query("SELECT * FROM TBTrail WHERE PkId_TBTrail = ?", [id], function(err, result) {
                con.release()
                res.send(result)
            })
        })
    }

    this.create = function(trail, res) {
        connection.acquire(function(err, con) {
            con.query('INSERT INTO TBTrail SET ?', trail, function(err, result) {
                con.release()
                if (err)
                    res.send({ status: 1, message: 'Trail creation failed' })
                else
                    res.send({ status: 0, message: 'Trail created successfully' })
            })
        })
    }

    this.update = function(trail, res) {
        connection.acquire(function(err, con) {
            con.query('UPDATE TBTrail set ? WHERE PkId_TBTrail = ?', [trail, trail.PkId_TBTrail], function(err, result) {
                con.release()
                if (err)
                    res.send({ status: 1, message: 'Trail update failed' })
                else
                    res.send({ status: 0, message: 'Trail update successfully' })
            })
        })
    }
}

module.exports = new trailAdm()