var http = require('http');

var config = {
    host: 'localhost',
    port: 3000,
    path: '/products',
    method:'post',
    headers: {
        'Accept': 'application/json',
        'content-type':'application/json'
    }
}

var client = http.request(config, function (res) {
    console.log(res.statusCode);
    res.on('data', function (body) {
        console.log('Body:' + body)
    })
})

var produto = {
    titulo:"Química moderna",
    descricao:"Livro de Quimica",
    preco:100
}

client.end(JSON.stringify(produto));