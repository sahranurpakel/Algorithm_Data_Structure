let Multipay = (m1, m2, res) => {
  let i, j, k;
  let N = 2;
  for (i = 0; i < N; i++) {
    for (j = 0; j < N; j++) {
      res[i][j] = 0;
      for (k = 0; k < N; k++) {
        res[i][j] += m1[i][k] * m2[k][j];
      }
    }
  }
  return res;
};
console.log(
  Multipay(
    [
      [1, 1],
      [1, 0],
    ],
    [
      [1, 1],
      [1, 0],
    ],
    [
      [0, 0],
      [0, 0],
    ]
  )
);
