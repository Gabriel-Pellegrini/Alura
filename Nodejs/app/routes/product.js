module.exports = function (application) {
    application.get("/", function (req, res) {

        var connection = application.config.connectionFactory();
        var productsBanco = new application.app.models.ProductsDAO(connection);

        productsBanco.lista(function (err, results) {

            res.render("produtos/lista", {
                lista: results
            });
        });
        connection.end();
    });
}