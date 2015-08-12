var fs = require("fs");
console.log("\t*** Started...");

var config = JSON.parse(fs.readFileSync("../data/glossary.json"));
console.log("\t*** Initial Config :: ", config);

fs.watch("../data/glossary.json", function(current, previous){
    console.log("\t*** Config changed... ::");
    config = JSON.parse(fs.readFileSync("../data/glossary.json"));
    console.log("\t*** New config file ::", config);
});
