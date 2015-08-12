var fs = require("fs");

console.log("\t*** Starting...");
var content = fs.readFileSync("../data/README.md")
console.log("\t*** Content ::\n\n" + content)
console.log("\t*** Carry on executing...");
