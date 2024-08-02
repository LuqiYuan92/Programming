var maxArea = function (height) {
  let left = 0;
  right = height.length - 1;
  let maxArea = 0;
  while (left < right) {
    let area = (right - left) * Math.min(height[left], height[right]);
    maxArea = Math.max(maxArea, area);
    if (height[left] < height[right]) {
      left += 1;
    } else {
      right -= 1;
    }
    console.log("max", maxArea);
  }
  return maxArea;
};

let height = [1, 8, 6, 2, 5, 4, 8, 3, 7];

console.log(maxArea(height));
