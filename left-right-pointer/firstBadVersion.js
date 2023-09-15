var solution = function (isBadVersion) {
  return function (nums) {
    let left = 0;
    let right = nums.length - 1;
    let mid = 0;
    while (left < right) {
      mid = Math.floor((left + right) / 2);
      if (isBadVersion(nums[mid])) {
        right = mid;
      } else left = mid + 1;
    }
    return left;
  };
};
var solution = function (isBadVersion) {
  return function (n) {
    let left = 1;
    let right = n;
    while (left < right) {
      let mid = Math.floor(left + (right - left) / 2);
      if (isBadVersion(mid)) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }
    return left;
  };
};
