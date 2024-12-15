import * as fs from "node:fs";

fs.readFile("./input/day8.txt", "utf-8", (_err, data) => {
  let antStuff = data.trimEnd().split("\n");
  let antSize = antStuff.length;

  //part 1
  let antennae = [];
  for (let x = 0; x < antSize; x++) {
    for (let y = 0; y < antSize; y++) {
      if (antStuff[x][y] !== ".") {
        antennae.push({
          char: antStuff[x][y],
          x: x,
          y: y,
        });
      }
    }
  }
  const antiBuggy = new Set();
  antennae.forEach((a) => {
    antennae.forEach((b) => {
      if (a.char !== b.char || a === b) return;

      const dY = b.y - a.y;
      const dX = b.x - a.x;
      const newPoint = {
        y: b.y + dY,
        x: b.x + dX,
      };
      if (
        newPoint.y < 0 ||
        newPoint.x < 0 ||
        newPoint.x >= antSize ||
        newPoint.y >= antSize
      )
        return;

      antiBuggy.add(`${newPoint.x}|${newPoint.y}`);
    });
  });
  console.log(antiBuggy.size);

  //part 2
  antStuff = data.trimEnd().split("\n");
  antSize = antStuff.length;

  antennae = [];
  for (let x = 0; x < antSize; x++) {
    for (let y = 0; y < antSize; y++) {
      if (antStuff[x][y] !== ".") {
        antennae.push({
          char: antStuff[x][y],
          x: x,
          y: y,
        });
      }
    }
  }
  const antiBuggyTwo = new Set();
  antennae.forEach((a) => {
    antennae.forEach((b) => {
      if (a.char !== b.char || a === b) return;

      const dY = b.y - a.y;
      const dX = b.x - a.x;
      const newPoint = {
        y: a.y,
        x: a.x,
      };

      while (true) {
        newPoint.y += dY;
        newPoint.x += dX;

        if (
          newPoint.y < 0 ||
          newPoint.x < 0 ||
          newPoint.x >= antSize ||
          newPoint.y >= antSize
        )
          return;
        antiBuggyTwo.add(`${newPoint.x}|${newPoint.y}`);
      }
    });
  });
  console.log(antiBuggyTwo.size);
});
