let price = (prices) => {
  prices = prices.sort((a, b) => a - b);
  let temp = 1;
  let max = 0;
  for (let i = prices.length - 1; i > -1; i--) {
    if (max < temp * prices[i]) {
      max = temp * prices[i];
    }
    temp++;
  }
  return max;
};
// price([6, 3, 2]);
// price([2, 2, 2, 2, 2, 2, 2]);
price([2, 10, 6, 3, 14]);
