const connection = require('./connection');

const collection = {}

collection.getallemployees = () => {
    return connection.ee().then(list => {
        return list
    })
}

module.exports = collection;