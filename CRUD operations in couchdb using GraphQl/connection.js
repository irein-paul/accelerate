const nano = require('nano')('http://irein:irein@localhost:5984');
let empdb = nano.use('employeesdb')

connection = {}

connection.ee = () => {
    let list = []
    return empdb.list({ include_docs: true }).then(docs => {
        docs.rows.forEach(details => {
            for (i in details) {
                if (i == "doc") {
                    list.push(details[i])
                }
            }
        })
        return list
    })
}

module.exports = connection;