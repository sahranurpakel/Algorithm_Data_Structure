const sayi = 10;
let check = true;

let count = 1;
let result = 0;

while (check) {
  check = true;
  if (count * 3 >= sayi && count * 5 >= sayi) {
    check = false;
  }
  if (count * 3 < sayi) {
    result += count * 3;
  }
  if (count * 5 < sayi) {
    result += count * 5;
  }
  if ((count * 3) % 5 === 0 && count * 3 < sayi) {
    result -= count * 3;
  }
  count++;
  console.log("count :", count);
  console.log("result :", result);
}
console.log("Last result", result);
