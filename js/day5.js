const fs = require("fs");
const path = require("path");
const input = fs
  .readFileSync(path.resolve(__dirname, "./input/day4.txt"), "utf8")
  .replace(/\r/g, "")
  .split("\n\n");
