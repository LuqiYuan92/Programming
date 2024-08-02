var plusOne = function (digits) {
  let i = digits.length - 1;
  let condition = true;

  while (condition) {
    if (i >= 0) {
      if (digits[i] === 9) {
        digits[i] = 0;
      } else {
        digits[i] += 1;
        condition = false;
      }
      i--;
    } else if (i < 0) {
      digits.unshift(1);
      condition = false;
    }
  }
  return digits;
};

let array = [9, 9, 9];
console.log(plusOne(array));

var arrayToNum = function (digits) {
  let length = digits.length;
  let num = [];
  let sum = 0;
  let power = length - 1;

  for (let i = 0; i < length; i++) {
    num[i] = digits[i] * Math.pow(10, power);
    power--;
    sum += num[i];
    console.log(power);
  }
  sum += 1;
  console.log(num, sum, power);
};
