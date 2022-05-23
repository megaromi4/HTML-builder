const fs = require("fs");

fs.readdir(__dirname, { withFileTypes: true }, (err, files) => {
  console.log("\nCurrent directory files:");
  if (err) console.log(err);
  else {
    files.forEach((file) => {
      console.log(file.dirent.isFile());
    });
  }
});
