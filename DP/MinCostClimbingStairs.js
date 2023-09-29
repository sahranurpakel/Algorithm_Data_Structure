var minCostClimbingStairs = function (cost) {
  for (let i = cost.length - 3; i > -1; i--) {
    cost[i] += Math.min(cost[i + 1], cost[i + 2]);
  }
  return Math.min(cost[0], cost[1]);
};
minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]);
