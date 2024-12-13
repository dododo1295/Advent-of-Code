const fs = require("fs");
const path = require("path");

const input = fs.readFileSync(
  path.resolve(__dirname, "./input/day4.txt"),
  "utf8",
);

const stuff = input
  .replace(/\r/g, "")
  .split("\n")
  .filter((x) => x != "")
  .map((x) => x.split(""));

// part 1
let xmas = 0;
for (let y = 0; y < stuff.length; y++) {
  for (let x = 0; x < stuff[y].length; x++) {
    if (stuff[y][x] != "X") continue;

    if (y > 2) {
      if (
        stuff[y - 1][x - 1] == "M" &&
        stuff[y - 2][x - 2] == "A" &&
        stuff[y - 3][x - 3] == "S"
      )
        xmas++;
      if (
        stuff[y - 1][x] == "M" &&
        stuff[y - 2][x] == "A" &&
        stuff[y - 3][x] == "S"
      )
        xmas++;
      if (
        stuff[y - 1][x + 1] == "M" &&
        stuff[y - 2][x + 2] == "A" &&
        stuff[y - 3][x + 3] == "S"
      )
        xmas++;
    }
    if (
      stuff[y][x - 1] == "M" &&
      stuff[y][x - 2] == "A" &&
      stuff[y][x - 3] == "S"
    )
      xmas++;
    if (
      stuff[y][x + 1] == "M" &&
      stuff[y][x + 2] == "A" &&
      stuff[y][x + 3] == "S"
    )
      xmas++;

    if (y < stuff.length - 3) {
      if (
        stuff[y + 1][x - 1] == "M" &&
        stuff[y + 2][x - 2] == "A" &&
        stuff[y + 3][x - 3] == "S"
      )
        xmas++;
      if (
        stuff[y + 1][x] == "M" &&
        stuff[y + 2][x] == "A" &&
        stuff[y + 3][x] == "S"
      )
        xmas++;
      if (
        stuff[y + 1][x + 1] == "M" &&
        stuff[y + 2][x + 2] == "A" &&
        stuff[y + 3][x + 3] == "S"
      )
        xmas++;
    }
  }
}

console.log(xmas);

//part 2

xmas = 0;
for (let y = 1; y < stuff.length - 1; y++) {
  for (let x = 1; x < stuff[y].length - 1; x++) {
    if (stuff[y][x] != "A") continue;

    if (stuff[y - 1][x - 1] == "M" && stuff[y + 1][x + 1] == "S") {
      if (stuff[y + 1][x - 1] == "M" && stuff[y - 1][x + 1] == "S") xmas++;
      if (stuff[y - 1][x + 1] == "M" && stuff[y + 1][x - 1] == "S") xmas++;
      continue;
    }
    if (stuff[y - 1][x + 1] == "M" && stuff[y + 1][x - 1] == "S") {
      if (stuff[y + 1][x + 1] == "M" && stuff[y - 1][x - 1] == "S") xmas++;
      if (stuff[y - 1][x - 1] == "M" && stuff[y + 1][x + 1] == "S") xmas++;
      continue;
    }
    if (stuff[y + 1][x - 1] == "M" && stuff[y - 1][x + 1] == "S") {
      if (stuff[y - 1][x - 1] == "M" && stuff[y + 1][x + 1] == "S") xmas++;
      if (stuff[y + 1][x + 1] == "M" && stuff[y - 1][x - 1] == "S") xmas++;
      continue;
    }
    if (stuff[y + 1][x + 1] == "M" && stuff[y - 1][x - 1] == "S") {
      if (stuff[y - 1][x + 1] == "M" && stuff[y + 1][x - 1] == "S") xmas++;
      if (stuff[y + 1][x - 1] == "M" && stuff[y - 1][x + 1] == "S") xmas++;
      continue;
    }
  }
}

console.log(xmas);
