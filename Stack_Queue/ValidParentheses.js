var validParentheses = function (s) {
  let dictionary = "()[]{}";
  let stack = [];
  for (var i = 0; i < s.length; i++) {
    stack.push(s[i]);
    if (
      stack.length >= 2 &&
      dictionary.indexOf(stack[stack.length - 2]) % 2 === 0 &&
      dictionary.indexOf(stack[stack.length - 1]) -
        dictionary.indexOf(stack[stack.length - 2]) ===
        1
    ) {
      stack.pop();
      stack.pop();
    }
  }
  if (stack.length === 0) {
    return true;
  }
  return false;
};
validParentheses("{[}");
