const fs = require("fs");
const path = require("path");

textPath = path.join(__dirname, "text.txt");
const readStream = fs.createReadStream(textPath);

readStream.on("data", (chank) => {
  console.log(chank.toString());
});
