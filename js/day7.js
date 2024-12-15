import fs from "node:fs";

const operatorsOne = ["+", "*"];
const operatorsTwo = ["+", "*", "|"];
// Part 1 Check
function checkComOne(num, tar) {
  let opCom = operatorsOne.map((op) => [op]);

  for (let i = 1; i < num.length - 1; i++) {
    opCom = opCom.flatMap((combo) => operatorsOne.map((op) => [...combo, op]));
  }

  for (let combo of opCom) {
    let result = num[0];
    for (let i = 0; i < combo.length; i++) {
      if (combo[i] === "+") {
        result += num[i + 1];
      } else if (combo[i] === "*") {
        result *= num[i + 1];
      }
    }

    if (result === tar) {
      return true;
    }
  }

  return false;
}
// Part 2 Check
function checkComTwo(num, tar) {
  let operatorCombinations = operatorsTwo.map((op) => [op]); // Start with each operator as its own array
  for (let i = 1; i < num.length - 1; i++) {
    operatorCombinations = operatorCombinations.flatMap((combo) =>
      operatorsTwo.map((op) => [...combo, op]),
    );
  }

  for (let combo of operatorCombinations) {
    // Evaluate the result for this operator combo
    let result = num[0]; // Start with the first num
    for (let i = 0; i < combo.length; i++) {
      if (combo[i] === "+") {
        result += num[i + 1];
      } else if (combo[i] === "*") {
        result *= num[i + 1];
      } else if (combo[i] === "|") {
        result = Number(result + "" + num[i + 1]);
      }
    }

    if (result === tar) {
      return true;
    }
  }

  return false;
}

fs.readFile("./input/day7.txt", "utf-8", (err, data) => {
  const numList = data
    .trimEnd()
    .split("\n")
    .map((row) => row.replace(":", ""))
    .map((row) => row.split(" ").map(Number));

  // Part 1
  let result = 0;
  numList.forEach((row) => {
    const tar = row[0];
    const num = row.slice(1);
    if (checkComOne(num, tar)) {
      result += tar;
    }
  });
  const partOne = result;
  console.log(partOne);

  // Part 2
  result = 0;

  numList.forEach((row) => {
    const tar = row[0];
    const num = row.slice(1);
    if (checkComTwo(num, tar)) {
      result += tar;
    }
  });
  const partTwo = result;
  console.log(partTwo);
});
