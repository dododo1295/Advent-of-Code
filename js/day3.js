fs.readFile("./input/day2.txt", "utf-8", (err, data) => {
  const lines = data
    .replace(/\r/g, "")
    .split("\n")
    .filter((x) => x != "")
    .map((x) => x.split(" ").map(Number));
});
