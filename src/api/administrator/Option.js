const connection = require('../../config/database')

function option(){
    
    this.get = function(id, res) {
        connection.acquire(function(err, con) {
            con.query("SELECT * FROM TBOption WHERE FkId_Question_TBOption = ?", [id], function(err, result) {
                con.release()
                res.send(result)
            })
        })
    }

    this.getEdit = function(id, res) {
        connection.acquire(function(err, con) {
            con.query("SELECT * FROM TBOption WHERE PkId_TBOption = ?", [id], function(err, result) {
                con.release()
                res.send(result)
            })
        })
    }

    this.create = function(option, res) {
        connection.acquire(function(err, con) {
            con.query("INSERT INTO TBOption SET ?", option, function(err, result) {
                con.release()
                if (err)
                    res.send({ status: 1, message: 'Failed to created option' })
                else
                    res.send({ status: 0, message: 'Success when creating option' })
            })
        })
    }

    this.update = function(option, res) {
        connection.acquire(function(err, con) {
            con.query("UPDATE TBOption SET ? WHERE PkId_TBOption = ?", [option, option.PkId_TBOption], function(err, result) {
                con.release()
                if (err)
                    res.send({ status: 1, message: 'Failed to update option' })
                else
                    res.send({ status: 0, message: 'Success when creating option ' })
            })
        })
    }
}

module.exports = new option()