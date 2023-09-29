// ! Bottom Up DP
var climbStairs = function (n) {
  let ways = [1, 1];
  for (let i = 2; i <= n; i++) {
    ways[i] = ways[i - 1] + ways[i - 2];
  }
  return ways[n];
};
climbStairs(5);
