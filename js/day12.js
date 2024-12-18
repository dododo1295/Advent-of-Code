import fs from "node:fs";

const grid = fs
  .readFileSync("./input/day12.txt", "utf-8")
  .trimEnd()
  .split("\n")
  .map((row) => row.split(""));

const rows = grid.length;
const cols = grid[0].length;
const visited = Array.from({ length: rows }, () => Array(cols).fill(false));
const dirs = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

const isInside = (x, y) => {
  return x >= 0 && y >= 0 && x < rows && y < cols;
};

const process = (x, y, char) => {
  let count = 0;
  let perimeter = 0;
  const stack = [[x, y]];

  while (stack.length) {
    const [curlX, curlY] = stack.pop();

    if (
      !isInside(curlX, curlY) ||
      visited[curlX][curlY] ||
      grid[curlX][curlY] !== char
    ) {
      continue;
    }
    visited[curlX][curlY] = true;
    count++;

    for (const [dx, dy] of dirs) {
      const newX = curlX + dx;
      const newY = curlY + dy;

      if (!isInside(newX, newY) || grid[newX][newY] !== char) {
        perimeter++;
      } else if (!visited[newX][newY]) {
        stack.push([newX, newY]);
      }
    }
  }
  return { count, perimeter };
};

const regions = [];

for (let i = 0; i < rows; i++) {
  for (let j = 0; j < cols; j++) {
    if (!visited[i][j]) {
      const char = grid[i][j];
      const region = process(i, j, char);
      regions.push({ count: region.count, perimeter: region.perimeter });
    }
  }
}

const processed = regions.reduce((acc, v) => {
  acc += v.count * v.perimeter;
  return acc;
}, 0);
console.log(processed);
