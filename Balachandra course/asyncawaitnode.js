const fspromise = require("fs").promises;
const path = require("path");

const fileOps = async () => {
  try {
    const data = await fspromise.readFile(
      path.join(__dirname, "files", "start.txt"),
      "utf8"
    );
    console.log(data);

    await fspromise.writeFile(
      path.join(__dirname, "files", "message.txt"),
      "Hello from node js"
    );
    console.log("The file has been saved!");

    await fspromise.appendFile(
      path.join(__dirname, "files", "message.txt"),
      "/n /n Bye take care"
    );

    console.log("file appended");

    await fspromise.rename(
      path.join(__dirname, "files", "message.txt"),
      path.join(__dirname, "files", "mynamechanged.txt")
    );

    await fspromise.unlink(path.join(__dirname, "files", "start.txt"));
  } catch (error) {
    console.error(error);
  }
};

fileOps();
