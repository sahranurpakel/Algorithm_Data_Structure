var twoSum = function (nums, target) {
  var hashmap = {};
  let diff = 0;
  for (let i = 0; i < nums.length; i++) {
    diff = target - nums[i];
    if (diff in hashmap) {
      return [hashmap[diff], i];
    }
    hashmap[nums[i]] = i;
  }
};
twoSum([2, 7, 11, 15], 9);
