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

    this.create = function(trail, res) {
        connection.acquire(function(err, con) {
            con.query('INSERT INTO TBTRrail SET ?', trail, function(err, result) {
                con.release()
                if (err)
                    res.send({ status: 1, message: 'Trail creating failed' })
                else
                    res.send({ status: 0, message: 'Trail created succesfully' })
            })
        })
    }

    this.update = function(trail, res) {
        connection.acquire(function(err, con) {
            con.query('UPDATE TBTrail set ? WHERE PkId_TBTrail = ?'), [trail, id], function(err, result) {
                con.release()
                if (err) 
                    res.send({ status: 1, message: 'Trail update failed' })
                else
                    res.send({ status: 0, message: 'Trail update successfully' })
            }
        })
    }
}

module.exports = new trailAdm()