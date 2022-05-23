const fs = require("fs");
const path = require("path");
const redline = require("readline");

textPath = path.join(__dirname, "text.txt");

const readableFromTerminal = process.stdin;
const wtitebleToTerminal = process.stdout;
const wtitebleToFile = fs.createWriteStream(textPath);
console.log("Введите Ваш текст");

readableFromTerminal.pipe(wtitebleToFile);

readableFromTerminal.on("data", (chank) => {
  const chankString = chank.toString();
  if (chankString.match("exit")) {
    readableFromTerminal.unpipe(wtitebleToFile);
    console.log("Пока-пока");
  }
});

process.on("SIGINT", function () {
  console.log("Пока-пока");
  process.exit();
});

// const readline = require("readline");
// const { stdin: input, stdout: output } = require("process");

// const rl = readline.createInterface({ input, output });

// rl.on("line", (chank) => {
//   const chankString = chank.toString();
//   wtitebleToFile.write(chankString  + '\n');
//   if (chankString == "exit") {
//     rl.close();
//     console.log("Пока-пока");
//   }
// });
// rl.on("SIGINT", function () {
//   console.log("Пока-пока");
//   process.exit();
// });
