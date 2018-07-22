var mysql = require('mysql');

//Wrapper
module.exports = function () {
    return connMySQL
};

function connMySQL() {
    console.log(' Connection with Database was estabilished')
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'gabrieric',
        database: 'mydatabase'
    });
}