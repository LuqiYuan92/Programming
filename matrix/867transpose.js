/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function (matrix) {
  let row = matrix.length;
  column = matrix[0].length;
  //the number of rows in the transposed matrix is equal to the number of columns in the original matrix
  let result = Array.from({ length: column }, () => Array(row).fill(0));
  //switch the row and column indices in the nested loop
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      result[j][i] = matrix[i][j];
    }
  }
  return result;
};

let matrix = [
  [1, 2],
  [4, 5],
  [7, 8],
];
console.log(transpose(matrix));
