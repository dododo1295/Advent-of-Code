import fs from "node:fs";

const input = fs
  .readFileSync("./input/day10.txt", "utf-8")
  .trimEnd()
  .split("\n");

console.log(input);
