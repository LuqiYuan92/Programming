/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  // let max= Number.MAX_SAFE_INTEGER;
  let max = Math.pow(2, 31) - 1;
  let min = Math.pow(-2, 31);

  console.log("test", Math.floor(-12 / 10));
  console.log("test2", Math.trunc(-12 / 10));

  //// Use Math.trunc to handle negative numbers correctly
  //It truncates (cuts off) the dot and the digits to the right of it, no matter whether the argument is a positive or negative number.
  let result = 0;
  while (x !== 0) {
    let digit = x % 10;
    x = Math.trunc(x / 10);
    console.log(x);

    //check for overflow, before adding the digit
    if (result > max / 10 || (result === max / 10 && digit > max % 10)) {
      return 0;
    }
    if (
      result < Math.trunc(min / 10) ||
      (result === Math.trunc(min / 10) && digit < min % 10)
    ) {
      return 0;
    }
    result = result * 10 + digit;
  }

  return result;
};

console.log(reverse(-123));
