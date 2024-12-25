const fs = require("fs");

const isOrdered = (update, rules) => {
  for (let i = 0; i < update.length - 1; i++) {
    if (
      !rules.find((rule) => rule[0] === update[i] && rule[1] === update[i + 1])
    ) {
      return false;
    }
  }
  return true;
};

const orderedList = (update, rules) => {
  const dic = [];
  const ordered = [];

  update.forEach((page) => {
    dic[page] = rules
      .filter((rule) => rule[0] === page)
      .map((rule) => rule[1])
      .filter((rule) => update.includes(rule));
  });

  while (Object.keys(dic).length) {
    const lastPg = Object.keys(dic).find((key) => dic[key].length === 0);

    for (key in dic) {
      dic[key] = dic[key].filter((item) => item !== lastPg);
    }

    delete dic[lastPg];

    ordered.unshift(lastPg);
  }

  return ordered;
};
fs.readFile("./input/day5.txt", "utf-8", (err, data) => {
  let [rules, updates] = data.trimEnd().split("\n\n");

  rules = rules.split("\n").map((rule) => rule.split("|"));
  updates = updates.split("\n").map((x) => x.split(","));
  console.log(updates);

  // Part 1
  const uno = updates.reduce((acc, update) => {
    if (!isOrdered(update, rules)) return acc;

    const halfIndex = Math.floor(update.length / 2);
    const half = parseInt(update[halfIndex]);
    acc += half;
    return acc;
  }, 0);
  console.log(uno);

  // Part 2
  const dos = updates.reduce((acc, update) => {
    if (isOrdered(update, rules)) {
      return acc;
    }

    update = orderedList(update, rules);
    const halfIndex = Math.floor(update.length / 2);
    const half = parseInt(update[halfIndex]);
    acc += half;

    return acc;
  }, 0);
  console.log(dos);
});
