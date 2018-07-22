module.exports = function (application) {
    application.get("/", function (req, res) {
        var mysql = require("mysql");
        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'gabrieric',
            database: 'mydatabase'
        });


        connection.query("select * from TABELA",function (err,result) {
            res.send(result);
        })

        connection.end();
    });
}