const dimensions = Deno.readTextFileSync("./input/day2.txt").trimEnd().split(
  "\n",
);

// day1

const getSquareFeet = (arr) => {
  const dim = arr.split("x");

  const results = (2 * dim[0] * dim[1]) +
    (2 * dim[1] * dim[2]) +
    (2 * dim[2] * dim[0]) +
    Math.min(dim[0] * dim[1], dim[1] * dim[2], dim[2] * dim[0]);

  return results;
};

const totalSquareFeet = dimensions.map(getSquareFeet).reduce((a, b) => a + b);

console.log(
  `The total number of squareFeet the elves need: ${totalSquareFeet}`,
);

//day2
// perfect bow is dim[0] + dim[1] + dim[2];
// ribbon length is a + a + b + b while a is the shortest and b is the second shortest

const ribbonLength = (arr) => {
  const sortAscending = arr.split("x").map(Number).sort((a, b) => a - b);

  const results = (sortAscending[0] * sortAscending[1] * sortAscending[2]) +
    (sortAscending[0] * 2 + sortAscending[1] * 2);

  return results;
};

const ribbonSquareFeet = dimensions.map(ribbonLength).reduce((a, b) => a + b);
console.log(ribbonSquareFeet);
