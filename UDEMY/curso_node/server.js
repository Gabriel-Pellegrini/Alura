console.log ("O server foi inicializado");
console.log ("Ouvindo na porta 3000(3050 do host)");

var http = require ("http");

var server = http.createServer(function(req,res){

	var categoria = req.url;

	if(categoria=="/Tecnologia"||categoria=="/tecnologia"){
	res.end( "<html><body> Este topico sera sobre Tecnologia</body></html>");

	} else if (categoria == "/Moda" || categoria == "/moda"){
	res.end( "<html><body> Este topico sera sobre Moda</body></html>");

	} else if (categoria == "/Politica" || categoria == "/politica"){
	res.end( "<html><body>  Este topico sera sobre Politica</body></html>");

 	} else {
	res.end( "<html><body> Este sera um portal de noticias</body></html>");
	}
});

server.listen(3000);