var twoSum = function (nums, target) {
  let l = 0;
  let r = nums.length - 1;

  while (l < r) {
    if (nums[l] + nums[r] > target) {
      r -= 1;
    } else if (nums[l] + nums[r] < target) {
      l += 1;
    } else if (nums[l] + nums[r] === target) {
      return [l + 1, r + 1];
    }
  }
};
