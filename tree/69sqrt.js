/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  //two points; calculate the mid point and compare with the square of the number
  //if the square is greater than the number, move the right pointer to mid-1
  //if the square is less than the number, move the left pointer to mid+1

  let left = 0;
  right = x;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (mid * mid === x) {
      return mid;
    } else if (mid * mid < x) {
      left = mid + 1;
    } else if (mid * mid > x) {
      right = mid - 1;
    }
  }

  //since the right pointer is always one less than the left pointer(the condition exit the loop); return the right pointer
  return right;
};
