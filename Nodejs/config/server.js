
// Exportando o módulo do express através de uma função
/* var express = require('express');
var app = express();
module.exports = function () {
    app.set("view engine", "ejs");
    return app;
} */

// Exportando o módulo do express através de uma variável
var express = require('express');
var app = express();
app.set("view engine", "ejs");
app.set('views', './app/views');
module.exports = app;
