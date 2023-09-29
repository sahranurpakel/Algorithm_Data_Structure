var generate = function (numRows) {
  let result = [[1]];
  if (1 === numRows) return result;
  result.push([1, 1]);
  if (2 === numRows) return result;
  for (let i = 2; i < numRows; i++) {
    let arr = [];
    arr.push(1);
    for (let j = 0; j < result[i - 1].length - 1; j++) {
      arr.push(result[i - 1][j] + result[i - 1][j + 1]);
    }
    arr.push(1);
    result.push(arr);
  }
  return result;
};
generate(4);
