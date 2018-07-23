
// Exportando o módulo do express através de uma função
/* var express = require('express');
var app = express();
module.exports = function () {
    app.set("view engine", "ejs");
    return app;
} */

// Exportando o módulo do express através de uma variável
var express = require('express');
var consign = require("consign");

var app = express();
app.set("view engine", "ejs");
app.set('views', './app/views');

//Adding data into the application
consign()
    .include("./app/routes")
    .then ("./app/models")
    .then("./config/connectionFactory.js")
    .into(app)


module.exports = app;
