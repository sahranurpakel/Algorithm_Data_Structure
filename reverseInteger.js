var reverse = function (x) {
  let negative = false;
  if (x < 0) {
    negative = true;
    x *= -1;
  }
  x = x.toString();

  let reversed = x.split("").reverse().join("");
  if (negative) {
    reversed = "-" + reversed;
  }
  reversed = parseInt(reversed);
  if (reversed < 2147483647 && reversed > 2147483648) return reversed;
  else return 0;
};
reverse(-1223);
