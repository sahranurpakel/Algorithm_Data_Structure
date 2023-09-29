var numIdenticalPairs = function (nums) {
  let hashmap = {};
  let count = 0;
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] in hashmap) {
      hashmap[nums[i]] += 1;
      count += hashmap[nums[i]] - 1;
    } else {
      hashmap[nums[i]] = 1;
    }
  }
  console.log(count);
  return count;
};
numIdenticalPairs([1, 1, 1, 1]);
