/**
 * @param {number} n
 * @return {number[]}
 */

//time complexity is O(nlogn)
//cuz num//2 is time complexity is O(logn)

//num & 1 is used to check if the last bit is 1 or 0; also can check odd or even number
//Bitwise AND (&): The bitwise AND operator
// 0011 & 0001 = 0001
//num >>= 1 is used to shift the bits to the right by 1 and assign the result to num
//Bitwise Right Shift (>>): The bitwise right shift operator shifts the bits of the number to the right by a specified number of positions.
var countBits = function (n) {
  if (n == 0) {
    return [0];
  }
  if (n == 1) {
    return [0, 1];
  }

  let result = [0, 1];
  for (let i = 2; i <= n; i++) {
    let count = 0;
    let num = i;

    while (num > 0) {
      //num & 1 is used to check if the last bit is 1 or 0; also can check odd or even number
      count += num & 1;
      //num>>=1 OR num = num >> 1;is used to shift the bits to the right by 1
      num >>= 1; //is equivalent to num = Math.floor(num/2)
    }
    result.push(count);
  }

  return result;
};

//dynamic programming
//time complexity is O(n)

// formula: count 1 0001= 1 +result[n-1]
// formula: count 2 0010= 1 +result[n-2]
// formula: count 3 0011= 1 +result[n-2]
// formula: count 4 0100= 1 +result[n-4]
// formula:count  5 0101= 1 +result[n-4]
// formula: count 6 0110= 1 +result[n-4]
// formula: count 7 0111= 1 +result[n-4]
// formula: count 8 1000= 1 +result[n-8]
var countBits = function (n) {
  let result = new Array(n + 1).fill(0);
  let offset = 1;
  let count;

  function dp(n) {
    for (let i = 1; i <= n; i++) {
      if (i == offset * 2) {
        offset *= 2;
      }
      count = 1 + result[i - offset];
      result[i] = count;
    }
    return result;
  }
  return dp(n);
};

//using stack;
//the decimalToBinary function has a time complexity of O(log(num)).
//The outer loop runs O(n) times:Loop through numbers from 0 to n
//For each iteration i, the operations inside the loop (binary conversion and counting 1s) take O(log(i)) time.
var countBits = function (n) {
  //convert decimal to binary
  function decimalToBinary2(num) {
    let binary = num.toString(2);
    return binary;
  }
  //convert decimal to binary using stack

  function decimalToBinary(num) {
    let stack = [];
    let binaryString = "";

    if (num === 0) {
      return "0";
    }

    while (num !== 0) {
      stack.push(num % 2);
      num = Math.floor(num / 2);
    }

    while (stack.length) {
      binaryString += stack.pop();
    }
    return binaryString;
  }

  let result = [];

  //time complexity is O(nlogn)
  for (let i = 0; i <= n; i++) {
    let binary = decimalToBinary(i);
    let count = 0;
    for (let b of binary) {
      if (b === "1") {
        count++;
      }
    }
    result.push(count);
  }
  return result;
};
