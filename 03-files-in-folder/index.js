const fs = require("fs");
const path = require("path");
const secretFolder = path.join(__dirname, "secret-folder");

fs.readdir(secretFolder, { withFileTypes: true }, (err, files) => {
  if (err) {
    console.error(err);
  } else {
    files.forEach((file) => {
      if (file.isFile()) {
        let filesSecretFolder = path.join(
          __dirname,
          "secret-folder",
          file.name
        );
        fs.stat(filesSecretFolder, (err, stats) => {
          if (err) console.log("Error: ", err.message);
          let name = path.parse(file.name).name;
          let ext = path.parse(file.name).ext.split(".")[1];
          let size = stats.size;
          console.log(`${name} - ${ext} - ${size} b`);
        });
      }
    });
  }
});
