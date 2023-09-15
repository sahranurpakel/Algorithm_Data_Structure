let sortedArr = [1, 3, 4, 5, 13, , 13, 13, 20, 25, 40, 42, 44, 50];
const binarySearch = function (sortedArr, data, left, right) {
  if (left > right) {
    return false;
  }
  var mid = Math.floor(left + (right - left) / 2);
  if (sortedArr[mid] === data) {
    return true;
  } else if (data < sortedArr[mid]) {
    return binarySearch(sortedArr, data, left, mid - 1);
  } else {
    return binarySearch(sortedArr, data, mid + 1, right);
  }
};

console.log(binarySearch(sortedArr, 50, 0, sortedArr.length - 1));

const binarySearchIterative = function (sortedArr, data) {
  let left = 0;
  let right = sortedArr.length;
  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);
    if (sortedArr[mid] === data) return true;
    else if (data < sortedArr[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return false;
};

console.log(binarySearchIterative(sortedArr, 13));
