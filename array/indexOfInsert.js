function indexInserted(nums, target) {
  let lower = 0;
  let upper = nums.length - 1;

  while (lower <= upper) {
    let mid = Math.floor((lower + upper) / 2);
    // console.log(mid);
    if (target == nums[mid]) {
      return mid;
    }
    if (target > nums[mid]) {
      lower = mid + 1;
    } else if (target < nums[mid]) {
      upper = mid - 1;
    }
  }
  return lower;
}

nums = [1, 3, 5, 6];
target = 2;
console.log(indexInserted(nums, target));
