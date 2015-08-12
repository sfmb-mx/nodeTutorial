var fs = require("fs");
console.log("\t*** Starting...\n");

var contents = fs.readFileSync("../data/glossary.json");
console.log("\t*** Contents ::\n\n" + contents);

// We need to parser it...
var config = JSON.parse(contents);
console.log("\t*** Contents ::\n\n" + config);
console.log("\t*** Glossary ::\n\n" + config.glossary.title);
