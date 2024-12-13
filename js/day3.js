fs = require("fs");

fs.readFile("./input/day3.txt", "utf-8", (err, data) => {
  const regex = /mul\((\d{1,3}),(\d{1,3})\)/g;
  const num = data.match(regex);

  console.log(num);
});
