const map = Deno.readTextFileSync("./input/day1.txt").trimEnd().split("");

// part 1

let floor = 0;

for (let i = 0; i < map.length; i++) {
  if (map[i] === "(") {
    floor++;
  } else if (map[i] === ")") {
    floor--;
  }
}

console.log("The map leads to floor: ", floor);

//part part 2

floor = 0;
let step = 0;

for (let i = 0; i < map.length; i++) {
  if (map[i] === "(") {
    floor++;
  } else if (map[i] === ")") {
    floor--;
    if (floor === -1) {
      step = i + 1;
      break;
    }
  }
}

console.log("step that Santa first goes into the basement is step: ", step);
