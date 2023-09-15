var findPeakElement = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  let mid = 0;
  while (left < right) {
    mid = Math.floor((left + right) / 2);
    if (
      nums[mid - 1] &&
      nums[mid + 1] &&
      nums[mid] > nums[mid - 1] &&
      nums[mid + 1] < nums[mid]
    )
      return mid;
    if (nums[mid - 1] && nums[mid] > nums[mid - 1]) left = mid + 1;
    else right = mid;
  }
  if (nums.length === 2) {
    if (nums[0] > nums[1]) return 0;
    else return 1;
  }
  return right;
};
var findPeakElement = function (nums) {
  if (nums.length === 1) {
    return 0;
  }
  let left = -1,
    right = nums.length;
  while (left + 1 < right) {
    const mid = Math.floor((left + right) / 2);
    if (mid === nums.length - 1) {
      return mid;
    }
    if (nums[mid] < nums[mid + 1]) {
      left = mid;
    } else {
      right = mid;
    }
  }
  return right;
};
console.log(findPeakElement([1, 2, 1, 3, 5, 6, 4]));
