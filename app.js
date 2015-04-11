var router = require("./router.js");
var http = require('http');
var serverPort = 3000;
// createServer
http.createServer(function (request, response) {
    router.style(request,response);
        router.home(request, response);
        router.lorem(request, response);
}).listen(serverPort);
console.log('Server running at localhost:' + serverPort);
