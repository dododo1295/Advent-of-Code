import fs from "node:fs";

//part 1

let part1 = fs
  .readFileSync("./input/day11.txt", "utf-8")
  .trimEnd()
  .split(" ")
  .map(Number);

console.log(part1);

for (let i = 0; i < 25; i++) {
  const newStones = [];

  part1.forEach((stone) => {
    if (stone === 0) {
      newStones.push(1);
    } else if (stone.toString().length % 2 === 0) {
      const str = stone.toString();
      const mid = str.length / 2;
      const left = parseInt(str.slice(0, mid), 10);
      const right = parseInt(str.slice(mid), 10);
      newStones.push(left, right);
    } else {
      newStones.push(stone * 2024);
    }
  });

  part1 = newStones;
}

console.log(part1.length);

//part 2

let part2 = fs
  .readFileSync("./input/day11.txt", "utf-8")
  .trimEnd()
  .split(" ")
  .reduce((acc, val) => {
    acc[val] = 1;
    return acc;
  }, {});

console.log(part2);

for (let i = 0; i < 75; i++) {
  const newStones = [];

  for (const [stone, count] of Object.entries(part2)) {
    const num = parseInt(stone);
    if (num === 0) {
      newStones[1] = (newStones[1] || 0) + count;
    } else if (stone.toString().length % 2 === 0) {
      const str = stone.toString();
      const mid = str.length / 2;
      const left = parseInt(str.slice(0, mid), 10);
      const right = parseInt(str.slice(mid), 10);
      newStones[left] = (newStones[left] || 0) + count;
      newStones[right] = (newStones[right] || 0) + count;
    } else {
      const newStone = num * 2024;
      newStones[newStone] = (newStones[newStone] || 0) + count;
    }
  }
  part2 = newStones;
}
const result = Object.values(part2).reduce((acc, val) => acc + val, 0);

console.log(result);
