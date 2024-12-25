const directions = Deno.readTextFileSync("./input/day3.txt")
  .trimEnd()
  .split("");

// part 1
const countHouses = () => {
  let x = 0;
  let y = 0;

  const visited = new Set();

  for (const move of directions) {
    if (move === "^") {
      y++;
    } else if (move === "v") {
      y--;
    } else if (move === "<") {
      x--;
    } else if (move === ">") {
      x++;
    }

    visited.add(`${x}, ${y}`);
  }

  return visited.size;
};

console.log(countHouses(directions));

// part 2

const doubleHouses = () => {
  let santaX = 0;
  let santaY = 0;
  let roboX = 0;
  let roboY = 0;

  const visited = new Set();

  for (let i = 0; i < directions.length; i++) {
    const move = directions[i];

    if (i % 2 === 0) {
      if (move === "^") {
        santaY++;
      } else if (move === "v") {
        santaY--;
      } else if (move === "<") {
        santaX--;
      } else if (move === ">") {
        santaX++;
      }
      visited.add(`${santaX}, ${santaY}`);
    } else {
      if (move === "^") {
        roboY++;
      } else if (move === "v") {
        roboY--;
      } else if (move === "<") {
        roboX--;
      } else if (move === ">") {
        roboX++;
      }
      visited.add(`${roboX}, ${roboY}`);
    }
  }
  return visited.size;
};

console.log(doubleHouses(directions));
