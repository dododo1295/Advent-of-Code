import fs from "node:fs";

fs.readFile("./input/day6.txt", "utf-8", (err, data) => {
  const isInfLoop = (grid, startX, startY, startDir) => {
    const dirs = [
      { dx: -1, dy: 0 }, // Up
      { dx: 0, dy: 1 }, // Right
      { dx: 1, dy: 0 }, // Down
      { dx: 0, dy: -1 }, // Left
    ];

    const rows = grid.length;
    const cols = grid[0].length;

    let x = startX;
    let y = startY;
    let dir = startDir;
    const visited = new Set(); // Tracks visited positions with dir

    while (true) {
      const state = `${x},${y},${dir}`;

      // If we have already visited this state, we are in an infinite loop
      if (visited.has(state)) {
        return true;
      }

      visited.add(state);

      // next position
      const nextX = x + dirs[dir].dx;
      const nextY = y + dirs[dir].dy;

      // Check if the guard is leaving the grid
      if (nextX < 0 || nextX >= rows || nextY < 0 || nextY >= cols) {
        return false; // No infinite loop
      }

      if (grid[nextX][nextY] === "#") {
        dir = (dir + 1) % 4;
      } else {
        x = nextX;
        y = nextY;
      }
    }
  };

  const getStartPos = () => {
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[0].length; j++) {
        if (grid[i][j] !== "." && grid[i][j] !== "#") return [i, j];
      }
    }
  };

  const grid = data.split("\n").map((row) => row.split(""));

  const [startX, startY] = getStartPos();
  const startDir = 0;

  const rows = grid.length;
  const cols = grid[0].length;
  let count = 0;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] !== ".") continue;

      // add an obstacle
      grid[i][j] = "#";

      // is infloop?
      if (isInfLoop(grid, startX, startY, startDir)) {
        count++;
      }

      // reset
      grid[i][j] = ".";
    }
  }

  console.log(count);
});
