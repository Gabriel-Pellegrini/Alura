module.exports = function (application) {


    application.get("/products", function (req, res) {

        var connection = application.config.connectionFactory();
        var productsDAO = new application.app.models.ProductsDAO(connection);

        productsDAO.lista(function (err, results) {

            res.format({
                html: function () {
                    res.render("produtos/lista", {
                        lista: results
                    });
                },
                json: function () {
                    res.json(results);
                }
            })
        });
        connection.end();
    });

    application.get("/products/form", function (req, res) {

        res.render("./produtos/form")
    })

    application.post("/products", function (req, res) {

        var produto = req.body;
        // console.log(produto)
        // res.send(produto);
        var connection = application.config.connectionFactory();
        var productsDAO = new application.app.models.ProductsDAO(connection);

        productsDAO.salva(produto, function (err, results) {
            // console.log(err)
            res.redirect(301, "/products");

        });
        connection.end();
    });
}