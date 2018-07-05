const connection = require('../../config/database')

function Question() {
    this.get = function(id, res) {
        connection.acquire(function(err, con) {
            con.query("SELECT * FROM TBQuestion WHERE FkId_Stage_TBQuestion = ?", [id], function(err,result) {
                con.release()
                res.send(result)
            })
        })
    }

    this.getEdit = function(id, res) {
        connection.acquire(function(err, con) {
            con.query("SELECT * FROM TBQuestion WHERE PkId_TBQuestion = ?", [id], function(err, result) {
                con.release()
                res.send(result)
            })
        })
    }

    this.create = function(question, res) {
        connection.acquire(function(err, con) {
            con.query("INSERT INTO TBQuestion SET ?", question, function(err, result) {
                con.release()
                if (err) 
                    res.send({ status: 1, message: 'Failed to create Question' })
                else
                    res.send({ status: 0, message: 'Successfully created question' })
            })
        })
    }

    this.update = function(question, res) {
        connection.acquire(function(err, con) {
            con.query("UPDATE TBQuestion SET ? WHERE PkID_TBQuestion = ?", [ question, question.PkId_TBQuestion], function(err, result) {
                con.release()
                if (err)
                    res.send({ status: 1, message: 'Failed to update question' })
                else 
                    res.send({ status: 0, message: 'Successfully update question' })
            })
        })
    }
}

module.exports = new Question()