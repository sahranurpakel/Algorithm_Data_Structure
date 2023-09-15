var topKFrequent = function (words, k) {
  let hashmap = {};
  for (var i = 0; i < words.length; i++) {
    if (words[i] in hashmap) {
      hashmap[words[i]] += 1;
    } else hashmap[words[i]] = 1;
  }
  console.log(Object.values(hashmap).sort());
  Object.values(hashmap)= Object.values(hashmap).sort()
  console.log(hashmap);
};

topKFrequent(["sahra", "love", "i", "leetcode", "i", "love", "coding"], 2);
