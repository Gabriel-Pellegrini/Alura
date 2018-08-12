module.exports = function (application) {
    
    
    application.get("/products", function (req, res) {

        var connection = application.config.connectionFactory();
        var productsDAO = new application.app.models.ProductsDAO(connection);

        productsDAO.lista(function (err, results) {

            res.render("produtos/lista", {
                lista: results
            });
        });
        connection.end();
    });

    application.get("/products/form", function (req, res) {

        res.render("./produtos/form")
    })

    application.post("/products", function (req, res) {

        var produto = req.body;
        // res.send(produto);
        var connection = application.config.connectionFactory();
        var productsDAO = new application.app.models.ProductsDAO(connection);

        productsDAO.salva(produto, function (err, results) {
            res.redirect(301, "/products");
        });
        connection.end();
    });
}