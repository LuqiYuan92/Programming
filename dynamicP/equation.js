const math = require("mathjs");

// Define the system of equations
// 2x + y = 5
// x + 3y = 6
// let A = math.matrix([
//   [7, 3, -4, 2],
//   [5, -3, 4, -2],
//   [-3, 1, -2, 1],
//   [-8, 4, 3, 2],
// ]);

// let b = math.matrix([18, 6, -5, 11]);

let A = math.matrix([
  [1, 1, 0],
  [0, 1, 1],
  [1, 1, 1],
]);

let b = math.matrix([68, 39, 80]);

try {
  const X = math.lusolve(A, b);
  console.log("solution:", X);

  //   X.forEach((val, index) => {
  //     console.log(`allsolution${index + 1}=${val[0]}`);
  //   });
} catch (error) {
  console.log(error);
}
