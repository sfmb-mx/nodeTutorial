var http = require("http");
var fs = require("fs");
console.log("\t*** Starting...");

// create the host with a configuration file
var config = JSON.parse(fs.readFileSync("config.json"));
var host = config.host;
var port = config.port;

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

// Now what if we want to change the server and port at the fly?
fs.watchFile("config.json", function(){
    config = JSON.parse(fs.readFileSync("config.json"));
    var host = config.host;
    var port = config.port;
    server.close();
    server.listen(port, host, function(){
        console.log("\t*** Now listening :: " + host + ":" + port);
    });
});
