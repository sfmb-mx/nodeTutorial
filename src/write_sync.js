var fs = require("fs");

console.log("\t*** Starting...\n\n");
fs.writeFileSync("../data/write_sync.txt", "\t *** Hello World!!! ***\n\tSynchronous!!\n\n");
console.log("\t*** Finished...");
