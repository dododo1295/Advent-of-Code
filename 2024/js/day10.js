import fs from "node:fs";

const topMap = fs
  .readFileSync("./input/day10.txt", "utf-8")
  .trimEnd()
  .split("\n")
  .map((x) => x.split("").map(Number));

let zeros = [];
for (let i = 0; i < topMap.length; i++)
  for (let j = 0; j < topMap[i].length; j++)
    if (topMap[i][j] == 0) zeros.push([i, j]);

function findRoute(pos) {
  let current = topMap[pos[0]][pos[1]],
    next = [];

  if (topMap[pos[0] + 1]?.[pos[1]] == current + 1)
    next.push([pos[0] + 1, pos[1]]);
  if (topMap[pos[0] - 1]?.[pos[1]] == current + 1)
    next.push([pos[0] - 1, pos[1]]);
  if (topMap[pos[0]][pos[1] + 1] == current + 1)
    next.push([pos[0], pos[1] + 1]);
  if (topMap[pos[0]][pos[1] - 1] == current + 1)
    next.push([pos[0], pos[1] - 1]);

  return next;
}

let part1 = 0;
zeros.forEach((pos) => {
  let queue = [pos];
  while (queue.length) {
    let candidates = [];
    queue.forEach((pos) => {
      if (topMap[pos[0]][pos[1]] == 9) part1++;
      else candidates.push(...findRoute(pos));
    });
    candidates.forEach((pos, i) => {
      for (let j = i + 1; j < candidates.length; j++)
        if (candidates[j][0] == pos[0] && candidates[j][1] == pos[1])
          candidates[j] = [];
    });
    queue = candidates.filter((x) => x.length);
  }
});

let part2 = 0;
zeros.forEach((pos) => {
  let queue = [pos];
  while (queue.length) {
    let candidates = [];
    queue.forEach((pos) => {
      if (topMap[pos[0]][pos[1]] == 9) part2++;
      else candidates.push(...findRoute(pos));
    });

    queue = candidates.filter((x) => x.length);
  }
});

console.log(part1);
console.log(part2);
