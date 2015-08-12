var fs = require("fs");

console.log("\t*** Starting...\n\n");
fs.writeFile("../data/write.txt", "\t *** Hello World!!!\n\tAsynchronous!!\n\n", function(error){
    console.log("Written file...");
});
console.log("\t*** Finished...");
