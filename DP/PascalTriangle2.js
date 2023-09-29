var getRow = function (rowIndex) {
  if (rowIndex === 0) return [1];
  else if (rowIndex === 1) return [1, 1];
  let arr = [1, 1];
  let arr2 = [];
  for (let i = 2; i <= rowIndex; i++) {
    arr2.push(1);
    for (let j = 0; j < arr.length - 1; j++) {
      let temp = arr[j] + arr[j + 1];
      arr2.push(temp);
    }
    arr2.push(1);
    arr = arr2;
    arr2 = [];
  }
  return arr;
};
