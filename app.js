// console.log("heelo world");

// const fs = require("fs");
// fs.writeFileSync("parthu.txt", "My name is Parthu");
// fs.appendFileSync("parthu.txt", " ,My bro name is siddu");
const validator = require("validator");
const chalk = require("chalk");
const notes = require("./notes.js");
const yargs = require("yargs");
//console.log(add(200, 350));

//const msg = notes;

// console.log(notes);
// console.log(chalk.blue.bold.bgRed.inverse("Success"));

// console.log(validator.isURL("https://soal.com"));

// const command = process.argv[2];

// if (command === "add") {
//   console.log("adding new line");
// }

yargs.command({
  command: "add",
  describe: "nothing",
  handler: function () {
    console.log("hello parthu");
  },
});

yargs.command({
  command: "remove",
  describe: "bye bye",
  handler: () => {
    console.log("bye bye parthu");
  },
});

yargs.command({
  command: "read",
  describe: "read the sentence",
  handler: () => {
    console.log("sentence of parthu");
  },
});

yargs.command({
  command: "list",
  describe: "list out",
  handler: () => {
    console.log("list of parthu");
  },
});

console.log(process.argv);
console.log(yargs.argv);
