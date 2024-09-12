/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let l = 1;
    let r = n;
    let mid;
    //The edge case n === 1 should be handled differently.
    if (n === 1) {
      return 1;
    }

    //
    while (l < r) {
      mid = Math.floor((l + r) / 2);
      if (isBadVersion(mid)) {
        //if the mid is bad version, then the first bad version is either mid or before mid
        r = mid;
      } else {
        //if the mid is not bad version, then the first bad version is after mid
        l = mid + 1;
      }
    }
    //when l === r, the first bad version is found
    return l;
  };
};

var solution2 = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let l = 1;
    let r = n;
    let mid;
    //The edge case n === 1 should be handled differently.
    if (n === 1) {
      return 1;
    }
    while (l < r) {
      mid = Math.floor((l + r) / 2);
      if (isBadVersion(mid) === false && isBadVersion(mid + 1) === true) {
        return mid + 1;
        //if the mid is not bad version and the next version is bad version, then the next version is the first bad version
      } else if (isBadVersion(mid) === true && isBadVersion(mid + 1) === true) {
        r = mid;
      } else {
        l = mid + 1;
      }
    }
    return mid;
  };
};
