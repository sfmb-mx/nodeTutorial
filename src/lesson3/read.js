var fs = require("fs");

console.log("\t*** Starting...");
fs.readFile("../data/README.md", function(error, data){
    console.log("\t*** Contents :: \n\n" + data);
})

console.log("\t*** Carry on executing...");
