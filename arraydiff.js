function arrayDiff(a, b) {
  if (b.length >= 0) {
    for (var i = 0; i < a.length; i++) {
      b.forEach((element) => {
        if (element == a[i]) {
          a.splice(i, 1);
        }
      });
    }
  }
  return a;
}
arrayDiff([1, 2, 3], [2]);
