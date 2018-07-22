

module.exports = function (application) {
    application.get("/", function (req, res) {
        
        var connection = application.config.connectionFactory();
        connection.query("select * from livros",function (err,results) {
            res.render("produtos/lista",{lista:results});
        })

        connection.end();
    });
}