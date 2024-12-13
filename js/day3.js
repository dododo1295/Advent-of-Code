const fs = require("fs");
const path = require("path");

const input = fs.readFileSync(
  path.resolve(__dirname, "./input/day3.txt"),
  "utf8",
);
const lines = input
  .replace(/\r/g, "")
  .split("\n")
  .filter((x) => x != "")
  .map((x) => x.matchAll(/mul\((\d+),(\d+)\)/g));

// part 1

const total = lines.reduce((a, x) => {
  let result = 0;
  for (let y of x) {
    result += y[1] * y[2];
  }

  return a + result;
}, 0);

console.log(total);

//part 2
const linesTwo = input
  .replace(/\r/g, "")
  .split("\n")
  .filter((x) => x != "")
  .map((x) => x.matchAll(/(?:mul\((\d+),(\d+)\))|(?:do\(\))|(?:don't\(\))/g));

let enabled = true;
let doDont = linesTwo.reduce((a, x) => {
  if (!x) return a;

  let result = 0;
  for (let y of x) {
    if (y[0] == "don't()") enabled = false;
    else if (y[0] == "do()") enabled = true;
    else if (enabled) result += y[1] * y[2];
  }

  return a + result;
}, 0);

console.log(doDont);

// again had to use some online help and use some stuff that others wrote, not claiming this as my own.
// kind of a cool regex challenge now that i see how to do the code!
