var renderer = require("./renderer.js"),
    qs = require("querystring"),
    fs = require('fs'),
    loremIpsum = require('./lorem.js');
//==========================================//
//     ./index.html request handler        //
//========================================//
function home(request, response) {
    if (request.url === "/") {
        response.writeHead(200, {'Content-Type': 'text/html'});
        renderer.view("header", {}, request, response);
        renderer.view("index", {}, request, response);
        renderer.view("footer", {}, request, response);
        response.end();
    }
}
//==========================================//
//     /lorem.html request handler         //
//========================================//
function lorem(request, response) {
    if (request.url === "/lorem") {
        var requestBody = '';
        request.on('data', function (data) {
            requestBody += data;
        });
        request.on('end', function () {
            var formData = qs.parse(requestBody);
            var count = formData.amount;
            var fileContents = fs.readFileSync('./views/lorem.html', {encoding: "utf-8"});

            if (formData.amount <= 0 && formData.selection == "") {
                fileContents = loremIpsum.errormessage["0"];
            }
            else if (formData.amount <= 0) {
                fileContents = loremIpsum.errormessage["1"];
            }
            else if (formData.selection == "") {
                fileContents = loremIpsum.errormessage["2"];
            }
            else {
                if (formData.selection == "words") {
                    fileContents = renderer.generate(count, loremIpsum.words, fileContents);
                }
                else if (formData.selection == "letters") {
                    fileContents = renderer.generate(count, loremIpsum.letters, fileContents);
                } else if (formData.selection == "paragraph") {
                    fileContents = renderer.generateParagraph(count, loremIpsum.paragraph, fileContents);
                }
            }
            response.writeHead(200, {'Content-Type': 'text/html'});
            renderer.view("header", {}, request, response);
            response.write(fileContents);
            renderer.view("footer", {}, request, response);
            response.end();
        });
    }
}
//===========================================//
//   HTTP:'Content-Type' request handler    //
//=========================================//
function style(request, response) {
    if (request.url.indexOf('.css') != -1) {
        response.writeHead(200, {'Content-Type': 'text/css'});
        renderer.contentType('/views' + request.url, request, response);
        response.end();
    }
    if (request.url.indexOf('.js') != -1) {
        response.writeHead(200, {'Content-Type': 'text/javascript'});
        renderer.contentType('/' + request.url, request, response);
        response.end();
    }
    if (request.url.indexOf('.jpg') != -1) {
        response.writeHead(200, {'Content-Type': 'image/jpeg'});
        renderer.contentType('/views' + request.url, request, response);
        response.end();
    }
    if (request.url.indexOf('.png') != -1) {
        response.writeHead(200, {'Content-Type': 'image/png'});
        renderer.contentType('/views' + request.url, request, response);
        response.end();
    }
}
//==========================================//
//           EXPORTS                       //
//========================================//
module.exports.style = style;
module.exports.home = home;
module.exports.lorem = lorem;
