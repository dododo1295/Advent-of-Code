// shifting to deno because it's better for these kinds of tasks imho, it's also quicker at runtime (for me so far) as well as it being both more secure and lighter on memory... (screams in 8gb macbook air)
import fs from "node:fs";

const diskMap = fs
  .readFileSync("./input/day9.txt", "utf-8")
  .trimEnd()
  .split("")
  .map(Number);

// part 1

let unpack = [];

for (let i = 0; i < diskMap.length; i++) {
  for (let j = diskMap[i]; j > 0; j--) {
    if (i % 2 === 0) {
      unpack.push(i / 2);
    } else {
      unpack.push(".");
    }
  }
}
// console.log(unpack);

//then defragment
unpack.forEach((block, index) => {
  if (block === ".") {
    while (true) {
      const temp = unpack.pop();
      if (temp === ".") {
        continue;
      } else {
        unpack[index] = temp;
        break;
      }
    }
  }
});

let checkSum = 0;

unpack.forEach((block, id) => {
  checkSum += block * id;
});

console.log(checkSum);

// part 2

unpack = [];

for (let i = 0; i < diskMap.length; i++) {
  const file = [];

  for (let j = diskMap[i]; j > 0; j--) {
    if (i % 2 === 0) {
      file.push(i / 2);
    } else {
      file.push(".");
    }
  }
  if (file.length) {
    unpack.push(file);
  }
}
// console.log(unpack);
console.log(unpack[1][0]);
//defrag
const zip = [];
outer: for (let i = unpack.length - 1; i >= 0; i--) {
  if (unpack[i][0] !== "." && !zip.includes(unpack[i][0])) {
    for (let j = 0; j <= i; j++) {
      if (unpack[j][0] === "." && unpack[j].length >= unpack[i].length) {
        if (unpack[j].length === unpack[i].length) {
          zip.push(unpack[i][0]);
          const temp = [...unpack[j]];
          unpack[j] = unpack[i];
          unpack[i] = temp;
          continue outer;
        } else {
          zip.push(unpack[i][0]);
          const temp = [...unpack[i]];
          unpack[i].fill(".");
          unpack.splice(j, 1, temp, unpack[j].slice(unpack[i].length));
          i++;
          continue outer;
        }
      }
    }
  }
}
// this loop needed to be proofread multiple times for me to get it to work... it's a hard to do loops in loops with that many ifs.

const defrag = unpack.flat();

checkSum = 0;

defrag.forEach((block, id) => {
  if (block !== ".") {
    checkSum += block * id;
  }
});

console.log(checkSum);
