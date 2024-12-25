const fs = require("fs");

fs.readFile("./input/day1.txt", "utf-8", (err, data) => {
  const arr = data
    .trimEnd()
    .split("\n")
    .map((row) => row.split("   "));

  const left = arr.map(([leftItem]) => +leftItem).sort();
  const right = arr.map(([, rightItem]) => +rightItem).sort();
  // part 1

  let sum = 0;
  for (let i = 0; i < left.length; i++) {
    sum += Math.abs(right[i] - left[i]);
  }

  console.log(sum);
  // part 2
  sum = 0;
  for (let i = 0; i < left.length; i++) {
    const num = left[i];
    const lint = right.indexOf(num);
    if (lint === -1) {
      continue;
    }
    const rint = right.lastIndexOf(num);

    sum += (rint - lint + 1) * num;
  }
  console.log(sum);
});
// feel like i actually understand whats happening more in javascript. going to try to finish up to day 6 and then continue doing both at the same time, Java first then Go.
