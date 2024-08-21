/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  let i = 0;
  results = [];
  while (i < intervals.length && newInterval[0] > intervals[i][1]) {
    results.push(intervals[i]);
    i++;
  }
  while (i < intervals.length && newInterval[1] >= intervals[i][0]) {
    newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
    newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
    i++;
  }
  results.push(newInterval);

  while (i < intervals.length) {
    results.push(intervals[i]);
    i++;
  }
  return results;
};
