var reverseWords = function (s) {
  let result = s.split(/\s+/);
  result = result.reverse().join(" ");
  return result;
};
reverseWords("have    a god day   sir  !");
