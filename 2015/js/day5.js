const strings = Deno.readTextFileSync("./input/day5.txt").trim().split("\n");

// part 1
const rules = /^(?=(.*[aeiou]){3})(?=.*([a-z])\2)(?!.*(ab|cd|pq|xy)).*$/;

const niceStrings = [];
const naughtyStrings = [];

for (let i = 0; i < strings.length; i++) {
  if (rules.test(strings[i])) {
    niceStrings.push(strings[i]);
  } else {
    naughtyStrings.push(strings[i]);
  }
}
console.log("Nice: ", niceStrings.length);
console.log("Naughty: ", naughtyStrings.length);

// part 2 w/ help

const isContainPair = (string) => /([a-z][a-z]).*\1/.test(string);
const isContainRepeatLetter = (string) => /([a-z])[a-z]\1/.test(string);

const isNiceString = (string) =>
  !!(isContainPair(string) && isContainRepeatLetter(string));

const result = strings.reduce(
  (total, string) => isNiceString(string) ? ++total : total,
  0,
);

console.log("Santa's new Nice List: ", result);
