/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let result = "";
  let carry = 0;
  let len = Math.max(a.length, b.length);
  //When iterating from the end of the strings, the indexing doesn't properly adjust for the difference in string lengths.
  //m1:reverse the strings and iterate from the beginning || m2:// Iterate from the end of the strings
  for (let i = 0; i < len; i++) {
    //pad the shorter string with zeros.
    //|| m1: reverse the strings and iterate from the beginning
    let reverseA = a.split("").reverse().join("");
    let reverseB = b.split("").reverse().join("");
    let charA = i < a.length ? reverseA[i] : "0";
    let charB = i < b.length ? reverseB[i] : "0";

    // //convert the characters to integers;add the digits and the carry
    let total = Number(charA) + parseInt(charB) + carry;
    let char = String(total % 2);
    result = char + result;
    carry = Math.floor(total / 2);
  }
  //add the final carry
  if (carry) {
    result = "1" + result;
  }
  return result;
};

var addBinary2 = function (a, b) {
  let result = "";
  let carry = 0;
  let len = Math.max(a.length, b.length);
  //When iterating from the end of the strings, the indexing doesn't properly adjust for the difference in string lengths.
  //m1:reverse the strings and iterate from the beginning || m2:// Iterate from the end of the strings
  for (let i = 0; i < len; i++) {
    //pad the shorter string with zeros.
    //|| m1: reverse the strings and iterate from the beginning
    let reverseA = a.split("").reverse().join("");
    let reverseB = b.split("").reverse().join("");
    let charA = i < a.length ? reverseA[i] : "0";
    let charB = i < b.length ? reverseB[i] : "0";
    //convert the characters to integers
    let digitA = charA.charCodeAt(0) - "0".charCodeAt(0);
    let digitB = charB.charCodeAt(0) - "0".charCodeAt(0);
    //add the digits and the carry
    let total = digitA + digitB + carry;
    let char = String(total % 2);
    result = char + result;
    carry = Math.floor(total / 2);
  }
  //add the final carry
  if (carry) {
    result = "1" + result;
  }
  return result;
};

var addBinary3 = function (a, b) {
  let result = "";
  let carry = 0;
  let len = Math.max(a.length, b.length);
  //When iterating from the end of the strings, the indexing doesn't properly adjust for the difference in string lengths.
  //m1:reverse the strings and iterate from the beginning || m2:// Iterate from the end of the strings
  for (let i = 0; i < len; i++) {
    //pad the shorter string with zeros.
    //|| m2: Iterate from the end of the strings
    let charA = i < a.length ? a[a.length - 1 - i] : "0";
    let charB = i < b.length ? b[b.length - 1 - i] : "0";
    //convert the characters to integers
    let digitA = charA.charCodeAt(0) - "0".charCodeAt(0);
    let digitB = charB.charCodeAt(0) - "0".charCodeAt(0);
    //add the digits and the carry
    let total = digitA + digitB + carry;
    let char = String(total % 2);
    result = char + result;
    carry = Math.floor(total / 2);
  }
  //add the final carry
  if (carry) {
    result = "1" + result;
  }
  return result;
};
