/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  // edge case: if the number of rows is 1 or equal/longder than the string, return the string
  if (numRows === 1 || numRows >= s.length) {
    return s;
  }
  let result = Array.from({ length: numRows }, () => []);
  let row = 0;
  step = 1;
  //if in the first row, increment the row
  //if in the last row, decrement the row
  for (let char of s) {
    result[row].push(char);
    if (row === 0) {
      step = 1;
    } else if (row === numRows - 1) {
      step = -1;
    }
    row += step;
  }

  for (row = 0; row < numRows; row++) {
    result[row] = result[row].join("");
  }

  return result.join("");
};

let s = "PAYPALISHIRING",
  numRows = 3;
console.log(convert(s, numRows));
