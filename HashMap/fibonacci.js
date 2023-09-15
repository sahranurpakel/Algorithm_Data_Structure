var fib = function (n) {
  let hashmap = {};
  if (n === 1 || n === 2) return 1;
  hashmap[1] = 1;
  hashmap[2] = 1;
  for (let i = 3; i <= n; i++) {
    hashmap[i] = hashmap[i - 1] + hashmap[i - 2];
  }
  return hashmap[n];
};
fib(6);
