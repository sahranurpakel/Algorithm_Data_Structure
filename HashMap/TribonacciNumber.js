var tribonacci = function (n) {
  let hashmap = {};
  if (n === 0) return 0;
  if (n === 1 || n === 2) return 1;
  hashmap[0] = 0;
  hashmap[1] = 1;
  hashmap[2] = 1;
  for (i = 3; i <= n; i++) {
    hashmap[i] = hashmap[i - 1] + hashmap[i - 2] + hashmap[i - 3];
    delete hashmap[i - 3];
  }
  return hashmap[n];
};
tribonacci(4);
