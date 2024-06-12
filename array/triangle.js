//120.triangle

// Given a triangle array, return the minimum path sum from top to bottom.

// For each step, you may move to an adjacent number of the row below. More formally, if you are on index i on the current row, you may move to either index i or index i + 1 on the next row.

var minimumTotal = function (triangle) {
  let minArr = [];
  let sum = 0;
  for (let i = 0; i < triangle.length; i++) {
    minArr[i] = Math.min(...triangle[i]);
    // console.log(minArr);
    // minArr.push(Math.min(triangle[i]));
  }
  console.log(minArr);

  for (let j = 0; j < minArr.length; j++) {
    sum += minArr[j];
    console.log("sum", sum);
  }

  return sum;
};

// Input: triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]
// Output: 11

let triangle = [[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]];

// minimumTotal(triangle);

// console.log(triangle[3]);
// console.log(...triangle[3]);

var minimumTotal2 = function (triangle) {
  const table = [];
  for (let i = 0; i < triangle.length; i++) {
    let newArr = new Array(triangle[i].length).fill(0);
    table.push(newArr);
    // console.log("array", newArr, "table", table);
  }

  table[0] = triangle[0];
  console.log("table", table);
  for (let row = 1; row < triangle.length; row++) {
    for (let col = 0; col < triangle[row].length; col++) {
      if (col === 0) {
        //the very left column= current value from triangel +  value of previous row (sum stored in new table)
        table[row][col] = triangle[row][col] + table[row - 1][col];
        // console.log("sum1", table);
      } else if (col === triangle[row].length - 1) {
        //the very right column= current value from triangel +  value stored in the index of (length-1) of previous row (sum stored in new table)
        table[row][col] =
          triangle[row][col] + table[row - 1][triangle[row - 1].length - 1];
        // console.log("sum2", table);
      } else {
        //the middle value= current value from triangel + minSum value of previous row (sum stored in new table)
        let minsum = Math.min(table[row - 1][col - 1], table[row - 1][col]);
        table[row][col] = triangle[row][col] + minsum;
        // console.log("sum3", table);
      }
    }
  }
  //table[table.length - 1] is the last row of array, spread operator transform the array into a list of nums
  return Math.min(...table[table.length - 1]);
};

// console.log(minimumTotal2(triangle));

var minimumTotal3 = function (triangle) {
  const table = [];
  for (let row of triangle) {
    let newArr = new Array(row.length).fill(0);
    table.push(newArr);
    console.log("array3", newArr, "table3", table);
  }
};

// minimumTotal3(triangle);

var minimumTotal4 = function (triangle) {
  dp = new Array(triangle.length + 1).fill(0);
  console.log(dp);
  for (let row = triangle.length - 1; row >= 0; row--) {
    for (let col = 0; col < triangle[row].length; col++) {
      let minValue = Math.min(dp[col], dp[col + 1]);
      //   minValue = Math.min(triangle[row][col], triangle[row][col + 1]);
      dp[col] = minValue + triangle[row][col];
      console.log(dp);
    }
  }
  return dp[0];
};

minimumTotal4(triangle);
