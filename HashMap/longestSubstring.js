var lengthOfLongestSubstring = function (s) {
  let hashmap = {};
  let max = 0;
  let l = 0;
  for (let i = 0; i < s.length; i++) {
    while (s[i] in hashmap) {
      delete hashmap[s[l]];
      l++;
    }
    hashmap[s[i]] = i;
    max = Math.max(max, i - l + 1);
  }
  return max;
};
lengthOfLongestSubstring("pwwekw");
