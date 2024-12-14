const fs = require("fs");

const isOrdered = (update, rules) => {
  for (let i = 0; i < update.length - 1; i++) {
    if (
      !rules.find((rule) => rule[0] === update[i] && rule[1] === update[i + 1])
    ) {
      return false;
    }
  }
  return true;
};
fs.readFile("./input/day5.txt", "utf-8", (err, data) => {
  let [rules, updates] = data.split("\n\n");

  rules = rules.split("\n").map((rule) => rule.split("|"));
  updates = updates.split("\n").map((x) => x.split(","));

  // Part 1
  const part1 = updates.reduce((acc, update) => {
    if (!isOrdered(update, rules)) return acc;

    const midIndex = Math.floor(update.length / 2);
    const mid = parseInt(update[midIndex]);
    acc += mid;
    return acc;
  }, 0);
  console.log(part1);
});
