//56. Merge Intervals

var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  let results = [intervals[0]];

  for (let item of intervals) {
    let e1 = results[results.length - 1][1];
    let s2 = item[0];
    let e2 = item[1];
    if (e1 >= s2) {
      results[results.length - 1][1] = Math.max(e1, e2);
    } else {
      results.push(item);
    }
  }
  return results;
};

let intervals = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];
console.log(merge(intervals));
