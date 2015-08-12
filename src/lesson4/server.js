var http = require("http");
var fs = require("fs");
console.log("\t*** Starting...");

// create the host
var host = "127.0.0.1";
var port = 1337;

var server = http.createServer(function(request, response){
    console.log("\t*** Received request ::" + request.url);
    fs.readFile("../../doc/public/" + request.url, function(error, data){
        if(error) {
            response.writeHead(404, {"Content-type":"text/plain"});
            response.end("Page not found...");
        } else {
            response.writeHead(200, {"Content-type":"text/html"});
            response.end(data);
        }
    });


});

// Lets make that server listen for requests
server.listen(port, host, function(){
    console.log("\t*** Server listening :: " + host + ":" + port);
});
