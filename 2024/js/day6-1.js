import fs from "node:fs";

fs.readFile("./input/day6.txt", "utf-8", (_err, data) => {
  const getStartPos = () => {
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[0].length; j++) {
        if (grid[i][j] !== "." && grid[i][j] !== "#") return [i, j];
      }
    }
  };
  const grid = data
    .trimEnd()
    .split("\n")
    .map((row) => row.split(""));
  const rows = grid.length;
  const cols = grid[0].length;
  let [x, y] = getStartPos();

  const dirs = [
    { dx: -1, dy: 0 }, //up
    { dx: 0, dy: 1 }, //right
    { dx: 1, dy: 0 }, //down
    { dx: 0, dy: -1 }, //left
  ];
  let dir = 0; // 0 up 1 right 2 down 3 left

  const visited = new Set();

  while (true) {
    visited.add(`${x}, ${y}`);
    //next pos
    const nextX = x + dirs[dir].dx;
    const nextY = y + dirs[dir].dy;
    // make sure guard is leaving grid or not
    if (nextX < 0 || nextX >= rows || nextY < 0 || nextY >= cols) {
      break;
    }
    // is there something in the way
    if (grid[nextX][nextY] === "#") {
      dir = (dir + 1) % 4;
    } else {
      x = nextX;
      y = nextY;
    }
  }
  const one = visited.size;
  console.log(one);
});
