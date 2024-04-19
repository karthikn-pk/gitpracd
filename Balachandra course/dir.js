const fs = require("fs");
const path = require("path");
//existsSync check whether file is there in that path or not
if (fs.existsSync("./newfold")) {
  fs.rmdir("./newfold", (err) => {
    if (err) throw err;
    console.log("folder created");
  });
}

if (!fs.existsSync("./newfold")) {
  fs.mkdir("./newfold", (err) => {
    if (err) throw err;
    console.log("folder created");
  });
}

const rf = fs.createReadStream(path.join(__dirname, "files", "demowrite.txt"), {
  encoding: "utf8",
});
const wf = fs.createWriteStream(
  path.join(__dirname, "files", "copydemowrite.txt")
);
rf.pipe(wf);
