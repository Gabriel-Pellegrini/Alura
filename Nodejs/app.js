var app = require("./config/server");//Caso exponha o módulo através de uma função/* () */;
var port = 3000;

app.get("/",function (req,res) {
    res.render("produtos/lista")    
});


app.listen(port, function () {
    console.log('express app listening on ' + port + ' (3050 on Host)');
});
