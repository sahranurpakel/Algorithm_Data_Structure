var guessNumber = function (n) {
  let left = 0;
  let right = n;
  let mid;
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (guess(mid) === 0) {
      return mid;
    } else if (guess(mid) === 1) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
};
