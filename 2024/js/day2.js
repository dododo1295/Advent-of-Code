const fs = require("fs");

fs.readFile("./input/day2.txt", "utf-8", (err, data) => {
  // part 1
  const lines = data
    .replace(/\r/g, "")
    .split("\n")
    .filter((x) => x != "")
    .map((x) => x.split(" ").map(Number));
  // This one required too much external help, my loops kept getting stuck... I see how this one works though
  // Now I get it.
  //
  // but this code is ugly as hell
  console.log(
    lines.filter((x) => {
      let biggestChange;
      let smallestChange;
      let decrease = false;
      let increase = false;
      for (let i = 1; i < x.length; i++) {
        if (x[i] < x[i - 1]) decrease = true;
        if (x[i] > x[i - 1]) increase = true;
        biggestChange =
          typeof biggestChange != "undefined"
            ? Math.max(biggestChange, Math.abs(x[i] - x[i - 1]))
            : Math.abs(x[i] - x[i - 1]);
        smallestChange =
          typeof smallestChange != "undefined"
            ? Math.min(smallestChange, Math.abs(x[i] - x[i - 1]))
            : Math.abs(x[i] - x[i - 1]);
      }

      return (
        ((decrease && !increase) || (!decrease && increase)) &&
        biggestChange <= 3 &&
        smallestChange >= 1
      );
    }).length,
  );
});
