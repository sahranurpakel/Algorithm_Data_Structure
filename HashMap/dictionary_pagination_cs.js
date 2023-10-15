let pagination_dictionay = (arr, w, x) => {
  arr = arr.sort();
  let hashmap = {};
  for (let i = 0; i < arr.length; i++) {
    hashmap[arr[i]] = i + 1;
  }
  let temp = 0;
  temp = Math.ceil(hashmap[x] / w);
  return temp;
};

pagination_dictionay(["a", "b", "c", "ab", "ac", "bb", "bz"], 2, "b");
