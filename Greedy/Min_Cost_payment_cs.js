let minCost = (cost) => {
  let count = 0;
  while (cost >= 0) {
    if (cost == 0) return count;
    if (cost - 50 >= 0) {
      cost -= 50;
      count++;
    } else if (cost - 5 >= 0) {
      cost -= 5;
      count++;
    } else if (cost - 1 >= 0) {
      cost -= 1;
      count++;
    }
  }
};
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (input) => {
  const A = input.split(" ").map(Number);

  console.log(minCost(A));
  rl.close();
});
