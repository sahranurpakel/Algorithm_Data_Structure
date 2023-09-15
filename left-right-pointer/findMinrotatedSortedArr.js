var findMin = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  let mid = 0;
  while (left < right) {
    mid = Math.floor((left + right) / 2);
    if (nums[mid - 1] && nums[mid] < nums[mid - 1]) {
      left = mid;
    } else right = mid;
  }
  return left;
};
console.log(findMin([11, 13, 15, 17]));
