// Exportando o módulo do express através de uma função
/* var express = require('express');
var consign = require("consign");

module.exports = function () {
    var app = express();

    app.set("view engine", "ejs");
    app.set('views', './app/views');

    app.use(express.urlencoded({extended: true}));


    //Adding data into the application
    consign()
        .include("./app/routes")
        .then("./app/models")
        .then("./config/connectionFactory.js")
        .into(app)

    return app;
} */

// Exportando o módulo do express através de uma variável
var express = require('express');
var consign = require("consign");
var expressValidator = require("express-validator");

var app = express();
app.set("view engine", "ejs");
app.set('views', './app/views');

app.use(express.urlencoded({extended: true}));
app.use(express.json())
app.use(expressValidator());


//Adding data into the application
consign()
    .include("./app/routes")
    .then("./app/models")
    .then("./config/connectionFactory.js")
    .into(app)


module.exports = app;