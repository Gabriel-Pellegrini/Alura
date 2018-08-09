function ProductsDAO(connection) {
    this._connection = connection;
}

ProductsDAO.prototype.lista = function (callback) {
    this._connection.query("select * from livros", callback);
}

ProductsDAO.prototype.salva = function (produto,callback) {
    this._connection.query("insert into livros set ?", produto ,callback);
}

module.exports = function () {
    return ProductsDAO;
}