// ! Binary serach ile nasıl sqrt bulabiliriimmm ????
var mySqrt = function (x) {
  if (x === 0 || x === 1) {
    return x;
  }
  let left = 2;
  let right = x / 2;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (mid * mid === x) {
      return mid;
    } else if (mid * mid < x && (mid + 1) * (mid + 1) > x) {
      return mid;
    } else if (mid * mid < x) left = mid + 1;
    else {
      right = mid - 1;
    }
  }
};
console.log(mySqrt(8));
