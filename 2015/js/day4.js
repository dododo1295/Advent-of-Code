import * as crypto from "node:crypto";

const cache = Deno.readTextFileSync("./input/day4.txt").trimEnd().toString();

console.log(cache);
let index = 1;

// part 1
function findFiveZeros(cache) {
  while (true) {
    const key = cache + index;
    const result = crypto.createHash("md5").update(key).digest("hex");
    if (result.startsWith("00000")) {
      return index;
    }
    index++;
  }
}
console.log(findFiveZeros(cache));

//part 2

function findSixZeros(cache) {
  while (true) {
    const key = cache + index;
    const result = crypto.createHash("md5").update(key).digest("hex");
    if (result.startsWith("000000")) {
      return index;
    }
    index++;
  }
}
console.log(findSixZeros(cache));
