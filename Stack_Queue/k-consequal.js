const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("", (str) => {
  str = str.split("").sort().join("");
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i - 1] || str[i] === str[i + 1]) {
      continue;
    } else if (str[i] === str[i - 1] && str[i] !== str[i + 1]) {
      continue;
    } else {
      result += str[i];
    }
  }
  return str;
});
